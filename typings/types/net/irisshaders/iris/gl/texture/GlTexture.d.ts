import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { TextureAccess } from '../../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { TextureFilteringData } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureFilteringData.d.ts'
export class GlTexture extends GlResource implements TextureAccess {
    constructor(arg0: TextureType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: TextureFilteringData)
    // private shouldBlur: boolean;
    // private shouldClamp: boolean;
    readonly target: TextureType;
    bind(arg0: number): void;
    destroyInternal(): void;
    getSampling(): GlSampler;
    getTarget(): TextureType;
    getTextureId(): () => number;
    getType(): TextureType;
}