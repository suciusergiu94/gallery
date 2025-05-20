import { getImage } from "@/server/db/queries";

export default async function ModalPage({ params, }: {params: Promise<{ id: string }>; }) {
  const imageId = (await params).id;
  const idAsNumber = Number(imageId)

  if(Number.isNaN(idAsNumber)) throw new Error(`${idAsNumber} is not a number`);

  const image = await getImage(idAsNumber);
  return <div className="card"><img src={image.url} alt={image.name}/></div>;
}