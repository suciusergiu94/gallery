export default async function PhotoModal({params: {id: photoId}} : {
  params: { id: string}
}) {
  const params = await params;

  return <div>{photoId}</div>
}