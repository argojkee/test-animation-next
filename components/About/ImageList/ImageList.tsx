import { StaticImageData } from "next/image";
import ImageItem from "../ImageItem/ImageItem";
import StyledImageList from "./StyledImageList.styled";
import { FC } from "react";

interface ImageListProps {
  items: StaticImageData[];
  position: string;
}

const ImageList: FC<ImageListProps> = ({ items, position }) => {
  return (
    <StyledImageList className={position}>
      {items.map((img, index) => (
        <li key={index}>
          <ImageItem image={img} />
        </li>
      ))}
    </StyledImageList>
  );
};

export default ImageList;
