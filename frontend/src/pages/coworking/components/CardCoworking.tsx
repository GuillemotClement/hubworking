import type { IWorking } from "../../../@types/working";
import { extractCoordGPS } from "../../../utils/helpers";

interface CardCoworkingProps {
  working: IWorking;
}

export default function CardCoworking({ working }: CardCoworkingProps) {
  console.log(working);
  const { title, image, localisation } = working;

  const { lat, long } = extractCoordGPS(localisation);

  return (
    <div className=''>
      <h2>{title}</h2>
      <img src={image} alt='' />
      <ul>
        <li>Latitude : {lat}</li>
        <li>Longitude: {long}</li>
      </ul>
    </div>
  );
}
