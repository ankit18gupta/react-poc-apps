import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Layout/Header";

const EditTemplate = () => {
  const params = useParams();
  return (
    <Fragment>
      <Header heading="Edit Template" showCreateBtn={false} />
      <p>Edit template {params.templateId}</p>
    </Fragment>
  );
};

export default EditTemplate;
