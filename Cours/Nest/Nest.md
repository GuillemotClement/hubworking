# Nest

## Module

Pour utiliser un service dans un autre service, on viens exporter le service souhaiter :
Cela permet de rendre disponible des methodes dispo dans un service

```ts
//users/users.module.ts
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService], // on exporte le module pour le rendre utilisable ailleurs
})
export class UsersModule {}
```

Dans le service qui utilise le service exporter, on viens ensuite importer

```ts
//src/auth/auth.module.ts
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [UsersModule], // on importe le service
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
```
