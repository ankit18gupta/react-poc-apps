import React, { Fragment } from "react";
import TemplateList from "../components/Templates/TemplateList";
import Header from "../components/Layout/Header";

const Home = () => {
  return (
    <Fragment>
      <Header heading="Template List" showCreateBtn={true} />
      <TemplateList />
    </Fragment>
  );
};

export default Home;
