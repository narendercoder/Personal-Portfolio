import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";

const Works = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = item.imgsrc;
  }, [item.imgsrc]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="grid-item photo"
    >
      <div className="box-item">
        <div className="image" style={{ height: "230px", overflow: "hidden" }}>
          
          {item.category === "video" ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item.href}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
           <>
           <a href={item.href} aria-label={item.name}>
            <div className="icon-box">
              <MdOutlineRemoveRedEye
                className="p-icon"
                aria-label="eye outline"
              />
            </div>
          </a>
            <a href={item.href} className="link">
              <motion.div
                initial={{ opacity: 1, display: "inline" }}
                animate={
                  imageLoaded
                    ? { opacity: 0, display: "none" }
                    : { opacity: 1, display: "inline" }
                }
                transition={{ duration: 0.5 }}
              >
                <Blurhash
                  hash={item.blurhash}
                  width="100%"
                  height={200}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              </motion.div>

              <motion.img
                src={item.imgsrc}
                width="100"
                height="100"
                alt="img"
                loading="lazy"
                initial={{ opacity: 0, display: "none" }}
                animate={
                  !imageLoaded
                    ? { opacity: 0, display: "none" }
                    : { opacity: 1, display: "inline" }
                }
                transition={{ duration: 0.5 }}
              />
            </a>
           </>
          )}
        </div>
        <div className="desc title">
          <a href={item.href} className="name">
            {item.name}
          </a>
          <p className="link text-center">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
