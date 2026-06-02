import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ImageHolder } from '../../../../../net/irisshaders/iris/gl/image/ImageHolder.d.ts'
import type { ComputeProgram } from '../../../../../net/irisshaders/iris/gl/program/ComputeProgram.d.ts'
import type { Program } from '../../../../../net/irisshaders/iris/gl/program/Program.d.ts'
import type { ProgramImages$Builder } from '../../../../../net/irisshaders/iris/gl/program/ProgramImages$Builder.d.ts'
import type { ProgramSamplers$Builder } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers$Builder.d.ts'
import type { ProgramUniforms$Builder } from '../../../../../net/irisshaders/iris/gl/program/ProgramUniforms$Builder.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { SamplerHolder } from '../../../../../net/irisshaders/iris/gl/sampler/SamplerHolder.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class ProgramBuilder extends ProgramUniforms$Builder implements ImageHolder, SamplerHolder {
    static begin(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: number[]): ProgramBuilder;
    static beginCompute(paramarg0: string, paramarg1: string, paramarg2: number[]): ProgramBuilder;
    private constructor(arg0: string, arg1: number, arg2: number[])
    // private images: ProgramImages$Builder;
    // private program: number;
    // private samplers: ProgramSamplers$Builder;
    addDefaultSampler(arg0: () => kotlin.Int, arg1: string[]): boolean;
    addDefaultSampler(arg0: TextureType, arg1: () => kotlin.Int, arg2: ValueUpdateNotifier, arg3: () => GlSampler, arg4: string[]): boolean;
    addDefaultSampler(arg0: () => kotlin.Int, arg1: string[]): boolean;
    addDynamicSampler(arg0: () => kotlin.Int, arg1: GlSampler, arg2: string[]): boolean;
    addDynamicSampler(arg0: () => kotlin.Int, arg1: GlSampler, arg2: ValueUpdateNotifier, arg3: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => kotlin.Int, arg2: () => GlSampler, arg3: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => kotlin.Int, arg2: ValueUpdateNotifier, arg3: () => GlSampler, arg4: string[]): boolean;
    addDynamicSampler(arg0: () => kotlin.Int, arg1: GlSampler, arg2: string[]): boolean;
    addDynamicSampler(arg0: () => kotlin.Int, arg1: GlSampler, arg2: ValueUpdateNotifier, arg3: string[]): boolean;
    addExternalSampler(arg0: number, arg1: string[]): void;
    addTextureImage(arg0: () => kotlin.Int, arg1: InternalTextureFormat, arg2: string): void;
    bindAttributeLocation(arg0: number, arg1: string): void;
    build(): Program;
    buildCompute(): ComputeProgram;
    hasImage(arg0: string): boolean;
    hasSampler(arg0: string): boolean;
}