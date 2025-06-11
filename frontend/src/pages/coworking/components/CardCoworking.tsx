import { Link } from "react-router";
import type { IWorking } from "../../../@types/working";
import { extractCoordGPS } from "../../../utils/helpers";

interface CardCoworkingProps {
  working: IWorking;
}

export default function CardCoworking({ working }: CardCoworkingProps) {
  const { id, title, image, localisation } = working;

  const { lat, long } = extractCoordGPS(localisation);

  return (
    <div className='card bg-base-100 w-96 shadow-sm'>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-center'>{title}</h2>
        <ul className='flex gap-x-3'>
          <li>Latitude : {lat}</li>
          <li>Longitude: {long}</li>
        </ul>
        <div className='card-actions justify-end'>
          <Link to={`/coworkings/${id}`} className='btn btn-primary'>
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
