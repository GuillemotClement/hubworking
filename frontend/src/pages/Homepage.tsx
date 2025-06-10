export default function Homepage() {
  return (
    <div className='flex min-h-screen'>
      <div
        className='relative w-full h-screen bg-cover bg-center flex-1 flex flex-col justify-center items-center '
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/04/12/16/07/coworking-6173112_1280.jpg')",
        }}
      >
        <div className='absolute inset-0 bg-black/60 backdrop-blur'></div>
        <div className='relative z-10 text-white p-8 '>
          <h1 className='text-4xl font-bold'>Bienvenue sur CoworkFinder</h1>
          <p className='mt-2 text-lg text-center'>Trouvez, réservez, commentez.</p>
        </div>
      </div>

      <div className='flex flex-col flex-1 border-s border-gray-200'>
        <header className='flex justify-end px-5 py-2 shadow'>
          <ul className='flex gap-x-2'>
            <li>
              <a href=''>Accueil</a>
            </li>
            <li>
              <a href=''>Nos Espaces</a>
            </li>
            <li>
              <a href=''>Se Connecter</a>
            </li>
          </ul>
        </header>
        <main className='flex-1 flex flex-col justify-center items-center px-4'>
          <h2 className='text-center text-2xl py-3'>Qui sommes-nous ?</h2>
          <div className='flex flex-col gap-y-4'>
            <p>
              Trouvez l’espace de coworking idéal en quelques clics. Réservez, travaillez, partagez…
              où que vous soyez.
            </p>
            <p>
              Gagnez du temps, travaillez mieux. Découvrez et réservez les meilleurs espaces de
              coworking autour de vous.
            </p>
            <p>
              Un seul endroit pour tous vos besoins de coworking. Recherchez, réservez et laissez
              votre avis pour aider la communauté.
            </p>
          </div>
        </main>
        <footer className='flex justify-center px-5 border-t py-2 border-gray-200'>
          <p>Copyright &copy; 2025 - Tous droits reserves</p>
        </footer>
      </div>
    </div>
  );
}
