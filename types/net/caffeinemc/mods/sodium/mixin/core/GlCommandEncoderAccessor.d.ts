import type { GlProgram } from '../../../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface GlCommandEncoderAccessor extends Object{
    sodium$applyPipelineState(arg0: RenderPipeline): void;
    sodium$setLastProgram(arg0: GlProgram): void;
}