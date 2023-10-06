import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);

  return (
    <div>
      <div className=" ">
      <h2 className="text-xl font-semibold mb-3"> All Caterogy </h2>
        {
          categories.map(category => <Link key={category.id} to={`/catogery/${category.id}`} className="text-xl font-medium "> <div className=" ml-4 mb-5">{category.name}</div> </Link>)
        }
      </div>
    </div>
  );
};

export default LeftSideNav;
