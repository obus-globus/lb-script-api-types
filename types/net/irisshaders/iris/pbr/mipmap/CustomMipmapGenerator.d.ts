import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CustomMipmapGenerator extends Object{
    generateMipLevels(arg0: NativeImage[], arg1: number): NativeImage[];
}