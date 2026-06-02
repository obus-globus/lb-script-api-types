import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { BufferBuilder } from '../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
import type { BatchCollector$Companion } from '../../../../net/ccbluex/liquidbounce/render/BatchCollector$Companion.d.ts'
import type { RenderBufferKey } from '../../../../net/ccbluex/liquidbounce/render/RenderBufferKey.d.ts'
import type { MeshDraw } from '../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class BatchCollector extends Object {
    static Companion: BatchCollector$Companion;
    constructor()
    // private bufferAllocatorInUse: ByteBufferBuilder[];
    // private bufferBuilders: Map<RenderBufferKey, BufferBuilder>;
    // private builtBuffers: Pair<RenderBufferKey, MeshDraw>[];
    // private keyCache: (param0: RenderPipeline) => RenderBufferKey;
    flush(renderTarget: RenderTarget, dynamicTransforms: GpuBufferSlice): void;
    key(pipeline: RenderPipeline, textures: { [key: string]: AbstractTexture }, uniforms: { [key: string]: GpuBufferSlice }): RenderBufferKey;
    start(key: RenderBufferKey): VertexConsumer;
}