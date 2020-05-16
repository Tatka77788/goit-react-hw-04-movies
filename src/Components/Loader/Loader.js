import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const Loader = () => (
  <div>
    <LoaderSpinner
      type="ThreeDots"
      color="pink"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);

export default Loader;
