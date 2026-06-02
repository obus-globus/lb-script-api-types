import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class SamplerBinding extends Object {
    constructor(arg0: TextureType, arg1: number, arg2: () => kotlin.Int, arg3: () => GlSampler, arg4: ValueUpdateNotifier)
    // private notifier: ValueUpdateNotifier;
    // private sampler: () => GlSampler;
    // private texture: () => kotlin.Int;
    // private textureType: TextureType;
    // private textureUnit: number;
    update(): void;
    // private updateSampler(): void;
}