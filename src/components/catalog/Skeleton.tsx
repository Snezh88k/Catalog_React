import React from "react";

import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={4}
    width={326}
    height={490}
    viewBox="0 0 326 490"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
  >
    <rect x="13" y="13" rx="20" ry="20" width="300" height="400" />
    <rect x="13" y="423" rx="10" ry="10" width="300" height="18" />
  </ContentLoader>
);

export default MyLoader;
