type IGeoLoc = {
  lat: string;
  long: string;
};

/**
 * Retourne les coordonnee GPS en extrayant la latitude et la longitude depuis une sting stocker en BDD qui stocke des coordonnees GPS
 * @param position : string non formater qui contient les coordonnees
 * @returns objet qui contient la lat et la long
 */
export function extractCoordGPS(position: string): IGeoLoc {
  const arrPos = position.split("\t");
  const lat = arrPos[0];
  const long = arrPos[1];
  return {
    lat,
    long,
  };
}
