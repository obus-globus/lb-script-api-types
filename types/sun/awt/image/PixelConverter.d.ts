import type { ColorModel } from '../../../java/awt/image/ColorModel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PixelConverter extends Object {
    static instance: PixelConverter;
    constructor()
    alphaMask: number;
    getAlphaMask(): number;
    pixelToRgb(arg0: number, arg1: ColorModel): number;
    rgbToPixel(arg0: number, arg1: ColorModel): number;
}