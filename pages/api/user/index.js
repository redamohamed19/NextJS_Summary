import nc from 'next-connect';

const dataFetch = (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'hello' }));
};
export default dataFetch;
