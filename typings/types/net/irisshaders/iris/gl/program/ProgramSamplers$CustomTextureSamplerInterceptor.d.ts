import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlSampler } from '../../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { SamplerHolder } from '../../../../../net/irisshaders/iris/gl/sampler/SamplerHolder.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { TextureAccess } from '../../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class ProgramSamplers$CustomTextureSamplerInterceptor extends Object implements SamplerHolder {
    private constructor(arg0: SamplerHolder, arg1: JavaMap<string, TextureAccess>, arg2: number[])
    // private customTextureIds: JavaMap<string, TextureAccess>;
    // private deactivatedOverrides: string[];
    // private samplerHolder: SamplerHolder;
    addDefaultSampler(arg0: () => number, ...arg1: string[]): boolean;
    addDefaultSampler(arg0: TextureType, arg1: () => number, arg2: ValueUpdateNotifier, arg3: () => GlSampler, ...arg4: string[]): boolean;
    addDynamicSampler(arg0: () => number, arg1: GlSampler, ...arg2: string[]): boolean;
    addDynamicSampler(arg0: () => number, arg1: GlSampler, arg2: ValueUpdateNotifier, ...arg3: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => number, arg2: () => GlSampler, ...arg3: string[]): boolean;
    addDynamicSampler(arg0: TextureType, arg1: () => number, arg2: ValueUpdateNotifier, arg3: () => GlSampler, ...arg4: string[]): boolean;
    addExternalSampler(arg0: number, ...arg1: string[]): void;
    // private getOverride(...arg0: string[]): TextureAccess;
    hasSampler(arg0: string): boolean;
}