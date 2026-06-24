import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StagedVertexBuffer$Draw } from '../../../../../../net/minecraft/client/renderer/StagedVertexBuffer$Draw.d.ts'
export interface GuiRendererDrawAccessor extends Object{
    fabric$Draw(): StagedVertexBuffer$Draw;
    fabric$pipeline(): RenderPipeline;
}