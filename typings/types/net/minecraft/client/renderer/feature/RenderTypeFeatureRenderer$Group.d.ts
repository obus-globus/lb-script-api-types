import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StagedVertexBuffer } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer.d.ts'
import type { StagedVertexBuffer$Draw } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer$Draw.d.ts'
import type { PreparedRenderType } from '../../../../../net/minecraft/client/renderer/rendertype/PreparedRenderType.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class RenderTypeFeatureRenderer$Group extends Object {
    private constructor(stagedBuffer: StagedVertexBuffer, canReorder: boolean)
    // private canReorder: boolean;
    // private drawRenderTypes: PreparedRenderType[];
    // private draws: StagedVertexBuffer$Draw[];
    // private lastDraw: StagedVertexBuffer$Draw;
    // private lastRenderType: RenderType;
    // private stagedBuffer: StagedVertexBuffer;
    // private getOrAddDraw(renderType: RenderType): StagedVertexBuffer$Draw;
    getVertexBuilder(renderType: RenderType): VertexConsumer;
}