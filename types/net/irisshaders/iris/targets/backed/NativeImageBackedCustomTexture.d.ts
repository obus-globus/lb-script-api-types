import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { TextureAccess } from '../../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { CustomTextureData$PngData } from '../../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData$PngData.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class NativeImageBackedCustomTexture extends DynamicTexture implements TextureAccess {
    constructor(arg0: CustomTextureData$PngData)
    // private shouldBlur: boolean;
    // private shouldClamp: boolean;
    // private getId(): number;
    getSampling(): GlSampler;
    getTextureId(): () => kotlin.Int;
    getType(): TextureType;
    upload(): void;
}