import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { BufferBuilder } from '../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexSorting } from '../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StagedVertexBuffer$Draw } from '../../../../net/minecraft/client/renderer/StagedVertexBuffer$Draw.d.ts'
import type { StagedVertexBuffer$ExecuteInfo } from '../../../../net/minecraft/client/renderer/StagedVertexBuffer$ExecuteInfo.d.ts'
import type { StagedVertexBuffer$GpuBufferPool } from '../../../../net/minecraft/client/renderer/StagedVertexBuffer$GpuBufferPool.d.ts'
export class StagedVertexBuffer extends Object implements AutoCloseable {
    constructor(label: () => string, initialCapacity: number)
    // private currentIndexBuffer: GpuBuffer;
    // private currentVertexBuffer: GpuBuffer;
    // private draws: StagedVertexBuffer$Draw[];
    // private indexBufferPool: StagedVertexBuffer$GpuBufferPool;
    // private lastBuildingDraw: StagedVertexBuffer$Draw;
    // private lastVertexBuilder: BufferBuilder;
    // private stagingBuffer: ByteBufferBuilder;
    // private stagingGpuBufferPool: StagedVertexBuffer$GpuBufferPool;
    // private vertexBufferPool: StagedVertexBuffer$GpuBufferPool;
    appendDraw(format: VertexFormat, primitiveTopology: PrimitiveTopology): StagedVertexBuffer$Draw;
    appendDraw(format: VertexFormat, primitiveTopology: PrimitiveTopology, quadSorting: VertexSorting): StagedVertexBuffer$Draw;
    close(): void;
    endDraw(): void;
    endFrame(): void;
    // private finishLastVertexBuilder(): void;
    getExecuteInfo(draw: StagedVertexBuffer$Draw): StagedVertexBuffer$ExecuteInfo;
    getVertexBuilder(draw: StagedVertexBuffer$Draw): VertexConsumer;
    // private getVertexBuilder$mixinextras$wrapped$19(arg0: StagedVertexBuffer$Draw): VertexConsumer;
    // private iris$notRenderingLevel(): boolean;
    upload(): void;
    // private uploadDrawsToBuffers(device: GpuDevice, draws: StagedVertexBuffer$Draw[], vertexGpuBuffer: GpuBuffer, indexGpuBuffer: GpuBuffer, vertexBufferSize: number, indexBufferSize: number): void;
}