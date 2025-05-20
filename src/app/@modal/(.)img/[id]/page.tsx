import {Modal} from "./modal";
import FullPageImageView from "@/components/full-image-page";

export default async function ModalPage({ params, }: {params: Promise<{ id: string }>; }) {
  const imageId = (await params).id;
  const idAsNumber = Number(imageId)

  if (Number.isNaN(idAsNumber)) throw new Error(`${idAsNumber} is not a number`);

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>)
}