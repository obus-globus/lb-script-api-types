import type { BufferBuilder } from '../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MultiBufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class MultiBufferSource$BufferSource extends Object implements MultiBufferSource {
    static immediate(parambuffer: ByteBufferBuilder): MultiBufferSource$BufferSource;
    static immediateWithBuffers(paramfixedBuffers: Map<RenderType, ByteBufferBuilder>, paramsharedBuffer: ByteBufferBuilder): MultiBufferSource$BufferSource;
    constructor(sharedBuffer: ByteBufferBuilder, fixedBuffers: Map<RenderType, ByteBufferBuilder>)
    fixedBuffers: Map<RenderType, ByteBufferBuilder>;
    // private lastSharedType: RenderType;
    // private sharedBuffer: ByteBufferBuilder;
    // private startedBuilders: Map<RenderType, BufferBuilder>;
    endBatch(): void;
    endBatch(type: RenderType): void;
    endBatch(type: RenderType, builder: BufferBuilder): void;
    endLastBatch(): void;
    getBuffer(renderType: RenderType): VertexConsumer;
    // private iris$notRenderingLevel(): boolean;
}