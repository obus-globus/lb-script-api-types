import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RenderTypeInterface extends Object{
    iris$getPipeline(): RenderPipeline;
    iris$getRenderTarget(): RenderTarget;
}