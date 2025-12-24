import Image from "next/image";
import { ImgProps } from "../types/img.types";



const Img: React.FC<ImgProps> = ({ alt = "", ...props }) => {
    return (
      <Image 
       unoptimized={true}
       alt={alt}
       {...props}
      />
    );
};

export default Img;