"use client";

import axios from "axios";
import React, { useState } from "react";

import { LoadingOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { message } from "antd";
const UploadFile = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [linkBtn, setLinkBtn] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "successful",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "error occurred",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("image", image);

    axios
      .post("https://imagehost-t74lbtpv.b4a.run/api/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (response) => {
        console.log(response.data);
        const data = await getData();
        const lastImage = data[data.length - 1]?.image;
        setLoading(false);
        setLinkBtn(true);
        setUrl(lastImage);
        success();
        setImage(null);
      })
      .catch((err) => console.log(err));

    // Clear form
  };

  return (
    <>
      {contextHolder}
      <div>
        <form className="flex flex-col gap-10 w-72" onSubmit={handleSubmit}>
          <input
            className="bg-gray-600   "
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            {loading ? <LoadingOutlined /> : "Upload"}
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-5">
        <label>YOUR IMAGE URL APPEARS HERE</label>

        <div className="flex gap-3 justify-center">
          <input
            type="text"
            className="p-2 outline-none text-blue-300 bg-black"
            value={url}
            readOnly
          />
          {linkBtn ? (
            <>
              <a className="text-2xl blue" href={url} target="_blank">
                <ArrowRightOutlined />
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

const getData = async () => {
  const response = await fetch(
    "https://imagehost-renjithcmrenju.b4a.run/api/image"
  );
  return response.json();
};

export default UploadFile;
