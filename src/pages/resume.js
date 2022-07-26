import React from "react";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  if (typeof window !== "undefined") {
    window.location = t("contact.resume.link");
  }
  return (
    <div className="container">
      <div className="content-container">
        <h1>Downloading resume...</h1>
        <p>
          If it takes longer than five seconds, click{" "}
          <a href={t("contact.resume.link")}>here</a>
        </p>
        {/* <h1>Resume</h1>
        <p>
          Please <a href="mailto:info@ceesjol.nl">email me</a> for my resume.
        </p> */}
      </div>
    </div>
  );
};

export default Resume;
