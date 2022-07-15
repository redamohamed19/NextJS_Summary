import { useRouter } from 'next/router';

export default function Route() {
  //this page shown with her folderpath plus a parameters and that accept more than one parameters

  //this is a react hook to acces the parameters
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <div></div>;
}
