import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderPass$UniformUploader } from '../../../../com/mojang/blaze3d/systems/RenderPass$UniformUploader.d.ts'
import type { VertexFormat$IndexType } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderPass$Draw<T extends Object | number | string | boolean> extends Record {
    // private baseVertex: number;
    // private firstIndex: number;
    // private indexBuffer: GpuBuffer;
    // private indexCount: number;
    // private indexType: VertexFormat$IndexType;
    // private slot: number;
    // private uniformUploaderConsumer: (param0: T, param1: RenderPass$UniformUploader) => void;
    // private vertexBuffer: GpuBuffer;
    baseVertex(): number;
    equals(o: Object | null): boolean;
    firstIndex(): number;
    hashCode(): number;
    indexBuffer(): GpuBuffer;
    indexCount(): number;
    indexType(): VertexFormat$IndexType;
    slot(): number;
    toString(): string;
    uniformUploaderConsumer(): (param0: T, param1: RenderPass$UniformUploader) => void;
    vertexBuffer(): GpuBuffer;
}