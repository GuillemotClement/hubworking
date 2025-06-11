import { useEffect, useState } from "react";
import type { IWorking } from "../../@types/working";
import CardCoworking from "./components/CardCoworking";

export default function ListCoworking() {
  const [listWorking, setListWorking] = useState<IWorking[]>([]);

  useEffect(() => {
    const fetchWorking = async () => {
      try {
        const response = await fetch("http://localhost:3000/workings");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: IWorking[] = await response.json();
        setListWorking(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWorking();
  }, []);
  return (
    <div className=''>
      <p>ListCoworking</p>
      <div className=''>
        {listWorking.map((working) => (
          <CardCoworking key={working.id} working={working} />
        ))}
      </div>
    </div>
  );
}
