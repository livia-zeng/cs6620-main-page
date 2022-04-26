import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
const Home = () => {
  const bucketName = "testbucketling";
  const signedUrlExpireSeconds = 60 * 5;
  const AWS = require("aws-sdk");
  var s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET,
  });

  let { username } = useParams();
  const [url, setUrl] = useState("");
  const link = "/home/" + username;
  useEffect(() => {
    requestUrl();
  }, []);

  const requestUrl = async () => {
    try {
      const link = await s3.getSignedUrl("getObject", {
        Bucket: bucketName,
        Key: username + ".zip",
        Expires: signedUrlExpireSeconds,
      });
      setUrl(link);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <br></br>
      <div className="auth-wrapper my-5">
        <div className="auth-inner">
          <h4>Welcome!</h4>
          <br></br>
          <h6>Clicke the button to download your survey.</h6>
          <br></br>
          {url && (
            <button className="btn btn-success" style={{ width: "100%" }}>
              <a href={url} style={{ color: "white" }}>
                Click
              </a>
            </button>
          )}
          <p className="forgot-password text-right">
            Link expired? request a new one --
            <a href={link}>here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
