import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {motion } from "framer-motion";

const Works = ({item}) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="grid-item photo relative flex justify-center items-center pt-0"
    >
      <div className="box-item relative text-center overflow-hidden">
        <div className="image relative overflow-hidden w-full h-full">
          <a href={item.href} aria-label={item.name}>
            <div className="icon-box">
              <MdOutlineRemoveRedEye
                className="p-icon"
                aria-label="eye outline"
              />
            </div>
          </a>
          <a href={item.href} className="link">
            <img
              src={item.imgsrc}
              width="100"
              height="100"
              alt="img"
            //   loading="lazy"
            />
          </a>
        </div>
        <div className="desc title">
          <a href={item.href} className="link name">
            {item.name}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
