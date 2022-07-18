//getStaticProps its function build on next it render at the qpplication start and before component is rendred
export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};
const compo = (props) => {
  return (
    <div>
      {props.ninja.map((element) => {
        return <h1 key={element.id}>{element.name}</h1>;
      })}
    </div>
  );
};
export default compo;
