import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { checkPassword } from '../utils/password';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findbyUsername(username);

    if (!user) {
      throw new UnauthorizedException('credential not valid');
    }

    const isValid = await checkPassword(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('credential not valid');
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
