import { ImageProps} from "next/image";

export interface ImgProps extends Omit<ImageProps, "alt"> {
    alt?: string;
}