import type { BufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class BatchableBufferSource extends MultiBufferSource$BufferSource implements AutoCloseable {
    constructor()
    constructor(arg0: ByteBufferBuilder, arg1: Map<RenderType, ByteBufferBuilder>)
    constructor(arg0: Map<RenderType, ByteBufferBuilder>)
    // private activeRenderTypes: RenderType[];
    // private drawDynamicBuffersFirst: boolean;
    // private dynamicBuffers: Map<RenderType, BufferBuilder[]>;
    close(): void;
    drawDirect(arg0: RenderType): void;
    endBatch(): void;
    endBatch(arg0: RenderType): void;
    endBatch(type: RenderType, builder: BufferBuilder): void;
    endLastBatch(): void;
    getBuffer(arg0: RenderType): VertexConsumer;
    // private getNextByteBufferBuilder(): ByteBufferBuilder;
    getRenderTypeOrder(arg0: RenderType): number;
    hasActiveRenderTypes(): boolean;
}