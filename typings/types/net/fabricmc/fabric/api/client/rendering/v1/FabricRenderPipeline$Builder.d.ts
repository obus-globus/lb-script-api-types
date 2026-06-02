import type { RenderPipeline$Builder } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline$Builder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface FabricRenderPipeline$Builder extends Object{
    withUsePipelineDrawModeForGui(arg0: boolean): RenderPipeline$Builder;
    withoutUsePipelineDrawModeForGui(): RenderPipeline$Builder;
}