export const getStaticPaths = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((ninja) => {
    return { params: { id: ninja.id.toString() } };
  });

  return {
    params: params,
    fallback: false, //this is used when we have a big number of routes it load just a few and load the others when the users go to the blog
  };
};
//getServerSideProps run the function on the request and each time opposite of getstaticprops that run once before the componet rerender
export const getServerSideProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};
