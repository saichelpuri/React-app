import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import resList from "./components/utils/mockdata";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarentMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

// below code used to create react element using cdn links not a appropriate way
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i'm from react nesting"),
//     React.createElement("h2", {}, "i'm from react nesting"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "i'm from react nesting"),
//     React.createElement("h2", {}, "i'm from react nesting"),
//   ]),
// ]);
// console.log(parent);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello I'm from react"
// );

// JSX
// React Element
// const JSXheading = <h1 id="heading">I'm Heading</h1>;
// console.log(JSXheading);

// // functional component
// // this takes arrow function
// const TitleComponent = () => <h1 id="heading">I'm TitleComponent</h1>;

// const HeadingComp = () => (
//   <div id="container">
//     <TitleComponent />
//     {JSXheading}
//     <h1 className="heading">I'm Heading from functional component</h1>
//   </div>
// );

// const HeadingComponent2 = () => (
//   <h1 className="heading">I'm Heading from functional component2</h1>
// );

// const HeadingComponent1 = () => (
//   <h1 className="heading">I'm Heading from functional component3</h1>
// );

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
//           alt=""
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// inline css for react style={styleCard} this is how it is used // write everything in object put that inside {}

// const styleCard = {
//   backgroundColor: "red",
// };

// const resObj = {
//   name: "mehfil",
//   cusines: ["biryani", "chai", "biscuit"],
//   cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
// };

// for (i = 0; i < resLen; i++) {
//   return i;
// }

// sorting resList based on time and rating
// resList.sort(
//   (x, y) => {
//     if (x.info.sla.deliveryTime == y.info.sla.deliveryTime) {
//       return y.info.avgRating - x.info.avgRating;
//     } else {
//       return x.info.sla.deliveryTime - y.info.sla.deliveryTime;
//     }
//   }
//   // x.info.avgRating - y.info.avgRating
// );

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//         {/* <RestuarentCard resData={resList[0]} /> */}
//         {resList.map((eachRestaurant, index) => (
//           <RestuarentCard
//             key={eachRestaurant.info.id}
//             // when ever using map or looping always give a unique id like above code
//             // when a new restra come sit will renders all the restra if we dont use id's
//             // passing id when looping so the ract only renders that new restra only
//             //  key={index} and  this is one way of passing unq key
//             //  dont use index as keys beacuse the order of array values might change
//             resData={eachRestaurant}
//           />
//         ))}

//         {/* resName="Sai Foods" cusines="biryani, haleem"  to pass props manually  inside resturant card*/}
//       </div>
//     </div>
//   );
// };

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestuarentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
// this below code is for making a div as root div so everything is rendered inside that div
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXheading); // for rendering react element using jsx
// root.render(<AppLayout />); // for rendering functional component
root.render(<RouterProvider router={appRouter} />);
