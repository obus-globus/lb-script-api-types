import type { ImmutableList$Builder } from '../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlUniform1iCall } from '../../../../../net/irisshaders/iris/gl/program/GlUniform1iCall.d.ts'
import type { ProgramSamplers } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { SamplerBinding } from '../../../../../net/irisshaders/iris/gl/sampler/SamplerBinding.d.ts'
import type { SamplerHolder } from '../../../../../net/irisshaders/iris/gl/sampler/SamplerHolder.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class ProgramSamplers$Builder extends Object implements SamplerHolder {
    private constructor(arg0: number, arg1: number[])
    // private calls: GlUniform1iCall[];
    // private nextUnit: number;
    // private notifiersToReset: ImmutableList$Builder<ValueUpdateNotifier>;
    // private program: number;
    // private remainingUnits: number;
    // private reservedTextureUnits: number[];
    // private samplers: ImmutableList$Builder<SamplerBinding>;
    addDefaultSampler(arg0: () => number, ...arg1: string[]): boolean;
    addDefaultSampler(arg0: TextureType, arg1: () => number, arg2: ValueUpdateNotifier, arg3: () => GlSampler, ...arg4: string[]): boolean;
    addDynamicSampler(arg0: () => number, arg1: GlSampler, ...arg2: string[]): boolean;
    addDynamicSampler(arg0: () => number, arg1: GlSampler, arg2: ValueUpdateNotifier, ...arg3: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => number, arg2: () => GlSampler, ...arg3: string[]): boolean;
    // private addDynamicSampler(arg0: TextureType, arg1: () => number, arg2: () => GlSampler, arg3: boolean, arg4: ValueUpdateNotifier, ...arg5: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => number, arg2: ValueUpdateNotifier, arg3: () => GlSampler, ...arg4: string[]): boolean;
    addExternalSampler(arg0: number, ...arg1: string[]): void;
    build(): ProgramSamplers;
    hasSampler(arg0: string): boolean;
}