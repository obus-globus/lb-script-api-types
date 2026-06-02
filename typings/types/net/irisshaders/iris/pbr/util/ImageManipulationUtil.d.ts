import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImageManipulationUtil extends Object {
    static scaleBilinear(paramarg0: NativeImage, paramarg1: number, paramarg2: number): NativeImage;
    static scaleNearestNeighbor(paramarg0: NativeImage, paramarg1: number, paramarg2: number): NativeImage;
    constructor()
}