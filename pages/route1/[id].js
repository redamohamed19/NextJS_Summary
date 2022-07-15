import { useRouter } from 'next/router';

export default function Route() {
  //this page shown with her folderpath plus a parameters

  //this is a react hook to acces the parameters
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Index page Next jS Route 01 with parameters id fetched by id {id}</h1>
    </div>
  );
}
