import data from './LibraryList.json';

// let data = {};
//
// const getData = () => {
//   fetch(
//     'https://raw.githubusercontent.com/wowufoundme/dump/master/LibraryList.json',
//   )
//     .then(response => response.json())
//     .then(responseJson => {
//       data = responseJson;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
//
// getData();

export default () => data;
