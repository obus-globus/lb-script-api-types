import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export interface TextureAccess extends Object{
    getSampling(): GlSampler;
    getTextureId(): () => kotlin.Int;
    getType(): TextureType;
}