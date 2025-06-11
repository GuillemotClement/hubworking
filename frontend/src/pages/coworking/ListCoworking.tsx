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
    <div className='container mx-auto py-10'>
      <h2 className='text-center text-2xl font-bold mb-5'>Nos place de co-workings</h2>
      <div className='grid grid-cols-3 gap-4'>
        {listWorking.map((working) => (
          <CardCoworking key={working.id} working={working} />
        ))}
      </div>
    </div>
  );
}
