import quotes from '../moke/quotes.json';

export default (req, res) => {
  console.log(">>>>>>>>>>", req.query);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(quote);
};