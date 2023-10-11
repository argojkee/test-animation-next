import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface AnimationPictureProps {
  cat: StaticImageData;
}
const AnimationPicture: FC<AnimationPictureProps> = ({ cat }) => {
  return <Image src={cat} alt="cat" />;
};

export default AnimationPicture;
