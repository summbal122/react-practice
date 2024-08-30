// const heading = React.createElement("h1",{id:"heading"},"Thanks for shopping");

// const products = ReactDOM.createRoot(document.getElementById('products'));
// products.render(heading);
// console.log(heading);
// console.log(typeof heading);

const ourDiv = React.createElement("div", {id:"div1"} , 
  React.createElement("div", {id:"innerDiv"}, [
  React.createElement("h1",{id:"heading"}, "I am h1 tag"),
  React.createElement("h2",{id:"heading"}, "I am h2 tag")

  ])
);
const root = ReactDOM.createRoot(document.getElementById('products'));
root.render(ourDiv);

