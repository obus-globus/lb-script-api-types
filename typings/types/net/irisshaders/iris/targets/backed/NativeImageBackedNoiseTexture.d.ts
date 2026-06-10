import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { TextureAccess } from '../../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class NativeImageBackedNoiseTexture extends DynamicTexture implements TextureAccess {
    constructor(arg0: number)
    getSampling(): GlSampler;
    getTextureId(): () => number;
    getType(): TextureType;
    upload(): void;
}