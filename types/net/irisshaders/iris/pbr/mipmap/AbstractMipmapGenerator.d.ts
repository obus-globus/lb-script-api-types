import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomMipmapGenerator } from '../../../../../net/irisshaders/iris/pbr/mipmap/CustomMipmapGenerator.d.ts'
export abstract class AbstractMipmapGenerator extends Object implements CustomMipmapGenerator {
    constructor()
    blend(arg0: number, arg1: number, arg2: number, arg3: number): number;
    generateMipLevels(arg0: NativeImage[], arg1: number): NativeImage[];
}