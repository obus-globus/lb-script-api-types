import type { GlRenderPipeline } from '../../../../../../com/mojang/blaze3d/opengl/GlRenderPipeline.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface GlRenderPassAccessor extends Object{
    getPipeline(): GlRenderPipeline;
}