import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface ImageItemProp {
  image: StaticImageData;
}

const ImageItem: FC<ImageItemProp> = ({ image }) => {
  return <Image src={image} alt="cat"></Image>;
};

export default ImageItem;
