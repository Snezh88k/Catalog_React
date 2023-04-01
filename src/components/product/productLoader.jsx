export const productLoader = async ({ params }) => {
  const productId = params.id;

  return fetch(
    `https://641b23c71f5d999a445c652b.mockapi.io/products/${productId}`
  )
    .then((response) => response.json())
    .then((item) => {
      console.log("item", item);
      return item;
    });
};
