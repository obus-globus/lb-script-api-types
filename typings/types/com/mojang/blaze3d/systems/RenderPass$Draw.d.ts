import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderPass$UniformUploader } from '../../../../com/mojang/blaze3d/systems/RenderPass$UniformUploader.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderPass$Draw<T extends unknown> extends Record {
    constructor(slot: number, vertexBuffer: GpuBuffer, indexBuffer: GpuBuffer, indexType: IndexType, firstIndex: number, indexCount: number, baseVertex: number)
    constructor(slot: number, vertexBuffer: GpuBuffer, indexBuffer: GpuBuffer, indexType: IndexType, firstIndex: number, indexCount: number, baseVertex: number, uniformUploaderConsumer: (param0: T, param1: RenderPass$UniformUploader) => void)
    // private baseVertex: number;
    // private firstIndex: number;
    // private indexBuffer: GpuBuffer;
    // private indexCount: number;
    // private indexType: IndexType;
    // private slot: number;
    // private uniformUploaderConsumer: (param0: T, param1: RenderPass$UniformUploader) => void;
    // private vertexBuffer: GpuBuffer;
    baseVertex(): number;
    equals(o: Object | null): boolean;
    firstIndex(): number;
    hashCode(): number;
    indexBuffer(): GpuBuffer;
    indexCount(): number;
    indexType(): IndexType;
    slot(): number;
    toString(): string;
    uniformUploaderConsumer(): (param0: T, param1: RenderPass$UniformUploader) => void;
    vertexBuffer(): GpuBuffer;
}