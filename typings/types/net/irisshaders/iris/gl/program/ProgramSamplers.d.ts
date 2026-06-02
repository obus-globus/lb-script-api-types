import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlUniform1iCall } from '../../../../../net/irisshaders/iris/gl/program/GlUniform1iCall.d.ts'
import type { ProgramSamplers$Builder } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers$Builder.d.ts'
import type { ProgramSamplers$CustomTextureSamplerInterceptor } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers$CustomTextureSamplerInterceptor.d.ts'
import type { SamplerBinding } from '../../../../../net/irisshaders/iris/gl/sampler/SamplerBinding.d.ts'
import type { SamplerHolder } from '../../../../../net/irisshaders/iris/gl/sampler/SamplerHolder.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { TextureAccess } from '../../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
export class ProgramSamplers extends Object {
    static builder(paramarg0: number, paramarg1: number[]): ProgramSamplers$Builder;
    static clearActiveSamplers(): void;
    static customTextureSamplerInterceptor(paramarg0: SamplerHolder, paramarg1: { [key: string]: TextureAccess }): ProgramSamplers$CustomTextureSamplerInterceptor;
    static customTextureSamplerInterceptor(paramarg0: SamplerHolder, paramarg1: { [key: string]: TextureAccess }, paramarg2: number[]): ProgramSamplers$CustomTextureSamplerInterceptor;
    private constructor(arg0: SamplerBinding[], arg1: ValueUpdateNotifier[], arg2: GlUniform1iCall[])
    // private initializer: GlUniform1iCall[];
    // private notifiersToReset: ValueUpdateNotifier[];
    // private samplerBindings: SamplerBinding[];
    removeListeners(): void;
    update(): void;
}