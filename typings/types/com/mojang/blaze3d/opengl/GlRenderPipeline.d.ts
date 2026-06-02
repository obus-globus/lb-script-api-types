import type { GlProgram } from '../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { CompiledRenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/CompiledRenderPipeline.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlRenderPipeline extends Record implements CompiledRenderPipeline {
    constructor(info: RenderPipeline, program: GlProgram)
    // private info: RenderPipeline;
    // private program: GlProgram;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): RenderPipeline;
    isValid(): boolean;
    program(): GlProgram;
    toString(): string;
}