import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MultiBufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class BufferSourceWrapper extends Object implements MultiBufferSource {
    static immediate(parambuffer: ByteBufferBuilder): MultiBufferSource$BufferSource;
    static immediateWithBuffers(paramfixedBuffers: Map<RenderType, ByteBufferBuilder>, paramsharedBuffer: ByteBufferBuilder): MultiBufferSource$BufferSource;
    constructor(arg0: MultiBufferSource, arg1: (param0: RenderType) => RenderType)
    // private bufferSource: MultiBufferSource;
    // private typeChanger: (param0: RenderType) => RenderType;
    getBuffer(arg0: RenderType): VertexConsumer;
    getOriginal(): MultiBufferSource;
}