import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OutlineBufferSourceSingleDrawAddition } from '../../../../net/ccbluex/liquidbounce/interfaces/OutlineBufferSourceSingleDrawAddition.d.ts'
import type { MultiBufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class OutlineBufferSource extends Object implements OutlineBufferSourceSingleDrawAddition, MultiBufferSource {
    static immediate(parambuffer: ByteBufferBuilder): MultiBufferSource$BufferSource;
    static immediateWithBuffers(paramfixedBuffers: Map<RenderType, ByteBufferBuilder>, paramsharedBuffer: ByteBufferBuilder): MultiBufferSource$BufferSource;
    constructor()
    // private outlineBufferSource: MultiBufferSource$BufferSource;
    // private outlineColor: number;
    endOutlineBatch(): void;
    getBuffer(renderType: RenderType): VertexConsumer;
    liquid_bounce_getSingleDrawBuffers(arg0: RenderType): VertexConsumer;
    setColor(color: number): void;
}