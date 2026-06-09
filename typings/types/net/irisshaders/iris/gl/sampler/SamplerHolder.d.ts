import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export interface SamplerHolder extends Object {
    addDefaultSampler(arg0: () => kotlin.Int, arg1: string[]): boolean;
    addDefaultSampler(arg0: TextureType, arg1: () => kotlin.Int, arg2: ValueUpdateNotifier, arg3: () => GlSampler, arg4: string[]): boolean;
    addDynamicSampler(arg0: () => kotlin.Int, arg1: GlSampler, arg2: string[]): boolean;
    addDynamicSampler(arg0: () => kotlin.Int, arg1: GlSampler, arg2: ValueUpdateNotifier, arg3: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => kotlin.Int, arg2: () => GlSampler, arg3: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => kotlin.Int, arg2: ValueUpdateNotifier, arg3: () => GlSampler, arg4: string[]): boolean;
    addExternalSampler(arg0: number, arg1: string[]): void;
    hasSampler(arg0: string): boolean;
}