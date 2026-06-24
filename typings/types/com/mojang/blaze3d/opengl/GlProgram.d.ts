import type { GlShaderModule } from '../../../../com/mojang/blaze3d/opengl/GlShaderModule.d.ts'
import type { Uniform } from '../../../../com/mojang/blaze3d/opengl/Uniform.d.ts'
import type { BindGroupLayout } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderInstanceInterface } from '../../../../net/irisshaders/iris/mixinterface/ShaderInstanceInterface.d.ts'
import type { CallbackInfo } from '../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
export class GlProgram extends Object implements AutoCloseable, ShaderInstanceInterface {
    static BUILT_IN_UNIFORMS: string[];
    static INVALID_PROGRAM: GlProgram;
    static link(paramvertexShader: GlShaderModule, paramfragmentShader: GlShaderModule, paramvertexBindings: (Object | null)[], paramdebugLabel: string): GlProgram;
    constructor(programId: number, debugLabel: string)
    readonly debugLabel: string;
    readonly programId: number;
    readonly shouldSkip: MethodHandle;
    uniformsByName: { [key: string]: Uniform };
    close(): void;
    getDebugLabel(): string;
    getProgramId(): number;
    getUniform(name: string): Uniform;
    getUniforms(): { [key: string]: Uniform };
    iris$shouldSkipThis(): boolean;
    // private iris$unlockDepthColorState(arg0: CallbackInfo): void;
    // private isKnownShader(): boolean;
    // private onTail(arg0: CallbackInfo): void;
    setShouldSkip(arg0: MethodHandle): void;
    setupBindGroupLayouts(bindGroupLayouts: BindGroupLayout[]): void;
    toString(): string;
}