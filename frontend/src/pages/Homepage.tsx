import { faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Homepage() {
  return (
    <div className='flex h-screen'>
      <div
        className='relative bg-cover bg-center flex-1 flex flex-col justify-center items-center'
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/04/12/16/07/coworking-6173112_1280.jpg')",
        }}
      >
        <div className='absolute inset-0 bg-black/60 backdrop-blur'></div>
        <div className='relative z-10 text-white p-8 '>
          <div className='flex justify-center mb-4'>
            <FontAwesomeIcon icon={faCity} className='text-3xl text-center' />
          </div>
          <h1 className='text-4xl font-bold'>Bienvenue sur CoworkFinder</h1>
          <p className='mt-2 text-lg text-center'>Trouvez, réservez, commentez.</p>
        </div>
      </div>

      <div className='flex flex-col flex-1 border-s border-gray-200'>
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
      </div>
    </div>
  );
}
