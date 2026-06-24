import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { MeshData } from '../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MeshDraw } from '../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
export class CachedMeshStorage extends Object implements AutoCloseable {
    constructor(arg0: string)
    // private baseBlockPos: BlockPos$MutableBlockPos;
    // private baseBlockPosAsLong: number;
    // private baseBlockPosUniform: GpuBufferSlice;
    byteBufferBuilder: ByteBufferBuilder;
    // private hasBaseBlockPosUniformValue: boolean;
    // private indexBuffer: GpuBuffer;
    label: string;
    // private meshDraw: MeshDraw;
    // private vertexBuffer: GpuBuffer;
    bindAndDraw(arg0: RenderPass): void;
    bindUniform(arg0: RenderPass): void;
    clearBuffers(): void;
    clearStates(): void;
    close(): void;
    isReady(): boolean;
    resolveBaseBlockPos(arg0: BlockPos): BlockPos;
    uploadAndSet(arg0: MeshData, arg1: RenderPipeline): void;
    // private writeBaseBlockPosUniform(arg0: BlockPos): void;
}