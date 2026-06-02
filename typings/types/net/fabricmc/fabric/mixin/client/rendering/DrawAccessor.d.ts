import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DrawAccessor extends Object{
    fabric$indexCount(): number;
    fabric$pipeline(): RenderPipeline;
}