import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const url = "http://localhost:3000/auth/login";

  const login = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    const data = {
      username,
      password,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status == 401) {
        setError("Credential inconnu");
      }

      if (!response.ok) {
        throw new Error("failed call the server");
      }

      const { access_token } = await response.json();

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <form action={login} className='border rounded shadow p-10'>
        <h2 className='text-2xl text-center'>Connexion</h2>
        <div className='mb-4'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            className='input'
            name='username'
            value={username ?? ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='password'>Mot de passe</label>
          <input type='password' className='input' name='password' />
        </div>
        <div className='mb-4'>
          <Link to={"/register"} className='text-sm text-blue-500 hover:underline'>
            Creer un compte
          </Link>
        </div>
        <div className='flex justify-between px-5'>
          <Link to={"/"} className='btn btn-neutral'>
            Retour
          </Link>
          <button type='submit' className='btn btn-primary'>
            Connexion
          </button>
        </div>
        {error && <p className='text-red-500 text-sm mt-4 text-center'>{error}</p>}
      </form>
    </div>
  );
}
