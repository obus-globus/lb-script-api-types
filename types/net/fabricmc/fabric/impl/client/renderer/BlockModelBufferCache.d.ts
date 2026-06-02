import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class BlockModelBufferCache extends Object {
    constructor(arg0: MultiBufferSource$BufferSource, arg1: OutlineBufferSource)
    // private bufferSource: MultiBufferSource$BufferSource;
    // private lastBuffer: VertexConsumer;
    // private lastOutlineBuffer: VertexConsumer;
    // private lastRenderType: RenderType;
    // private outlineBufferSource: OutlineBufferSource;
    // private outlineColor: number;
    getBuffer(arg0: RenderType): VertexConsumer;
    getOutlineBuffer(arg0: RenderType): VertexConsumer;
    outlineColor(arg0: number): void;
    // private update(arg0: RenderType): void;
}