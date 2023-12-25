import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { CardContext } from "../../Context/CardContext";
const CardLayout = () => {
  const { posts, searchResults } = useContext(CardContext);
  return (
    <div>
      <div className="text-center w-full my-10">
        <h1 className="text-4xl text-gray-700 poppins font-semibold">
          Explore Recipes
        </h1>
      </div>

      <div className=" w-full justify-items-center grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-10">
        {/* <div></div> */}
        {searchResults
          ? searchResults.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                header={post.title}
                image={post.post_image}
              />
            ))
          : posts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                header={post.title}
                image={post.post_image}
              />
            ))}
      </div>
    </div>
  );
};

export default CardLayout;
