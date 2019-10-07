import axios from 'axios';

// const token = window.localStorage.getItem('token');

// export const getProducts = () => {
//   return {
//     type: 'GET_PRODUCTS',
//     payload: axios.get(`http://192.168.1.115:4000/products`),
//   };
// };


export const getProductById = productid => {
  return {
    type: 'GET_PRODUCT_BY_ID',
    payload: axios.get(`/products/${productid}`),
  };
};

// export const addQty = productid => {
//   return {
//     type: 'ADD_PRODUCT_QTY',
//     payload: Axios.patch(
//       `http://localhost:4000/products/qty/add/1/${productid}`,
//       {
//         headers: {
//           auth: token,
//         },
//       },
//     ),
//   };
// };

// export const reduceQty = productid => {
//   return {
//     type: 'ADD_PRODUCT_QTY',
//     payload: Axios.patch(
//       `http://localhost:4000/products/qty/reduce/1/${productid}`,
//       {
//         headers: {
//           auth: token,
//         },
//       },
//     ),
//   };
// };

export const addProduct = data => {
  return {
    type: 'ADD_PRODUCT',
    payload: axios.post('/products/', data),
  };
};

export const deleteProduct = productid => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete(
      `/products/${productid}`,
    ),
  };
};

export const editProduct = (productid, data) => {
  return {
    type: 'EDIT_PRODUCT',
    payload: axios.put(
      `/products/${productid}`,
      data,
    ),
  };
};
