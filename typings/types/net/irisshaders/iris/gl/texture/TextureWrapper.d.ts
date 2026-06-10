import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { TextureAccess } from '../../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class TextureWrapper extends Object implements TextureAccess {
    constructor(arg0: () => number, arg1: TextureType)
    // private texture: () => number;
    readonly type: TextureType;
    getSampling(): GlSampler;
    getTextureId(): () => number;
    getType(): TextureType;
}