import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 ">
      <div className="shadow-xl rounded-2xl p-5">
        <h1 className="font-bold font-sans text-2xl text-gray-800 my-4">block element</h1>
        <p className="text-gray-700 text-semi">
          Block element start a new line, It’s take full width normally. Block
          elements normally can contain any data and other inline elements and
          block element. You can change visual value of block element by using
          ‘display’ property...
        </p>
        <h1 className="font-bold font-sans text-2xl text-gray-800 my-4">inline element</h1>
        <p className="text-gray-700 text-semi">
          Inline element does not start a new line. It’s take only necessary
          width. Inline element can contain text, data, inline element You can
          change visual value of block element by using ‘display’ property...
        </p>
      </div>
      <div className="shadow-xl rounded-2xl p-5">
        <h1 className="font-bold font-sans text-2xl text-gray-800 my-4">Context api</h1>
        <p className="text-gray-700 text-semi">
        React includes Context api in their v16.3.0 version. When we want to
        send data from parent component to child component, We use props
        drilling, some time it’s take too much time and make trouble. Context api make
        it easy, by using context api you don’t need to drilling Just create a
        context api in parent component and use it in any child component...
        </p>
      </div>
    </div>
  );
};

export default Blogs;
