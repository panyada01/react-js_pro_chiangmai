import React from "react";

const HomeHead = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src="https://i.pinimg.com/originals/cf/9f/c1/cf9fc12f088061e4d4f2ba805790daeb.png"
        alt=""
        width="500"
        height="500"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
    </div>
  );
};

export default HomeHead;
