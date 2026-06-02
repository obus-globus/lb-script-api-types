import type { Image } from '../../../java/awt/Image.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MultiResolutionImage extends Object{
    getResolutionVariant(arg0: number, arg1: number): Image;
    getResolutionVariants(): Image[];
}