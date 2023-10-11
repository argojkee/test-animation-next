import { StaticImageData } from "next/image";
import ImageItem from "../ImageItem/ImageItem";
import StyledImageList from "./StyledImageList.styled";
import { nanoid } from "nanoid";
import { FC } from "react";

interface ImageListProps {
  items: StaticImageData[];
  position: string;
}

const ImageList: FC<ImageListProps> = ({ items, position }) => {
  return (
    <StyledImageList className={position}>
      {items.map((img) => (
        <li key={nanoid()}>
          <ImageItem image={img} />
        </li>
      ))}
    </StyledImageList>
  );
};

export default ImageList;
