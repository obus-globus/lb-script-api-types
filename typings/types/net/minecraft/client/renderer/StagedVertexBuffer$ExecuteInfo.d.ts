import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StagedVertexBuffer$ExecuteInfo extends Record {
    constructor(vertexBuffer: GpuBuffer, indexBuffer: GpuBuffer, indexType: IndexType, baseVertex: number, firstIndex: number, indexCount: number)
    // private baseVertex: number;
    // private firstIndex: number;
    // private indexBuffer: GpuBuffer;
    // private indexCount: number;
    // private indexType: IndexType;
    // private vertexBuffer: GpuBuffer;
    baseVertex(): number;
    equals(o: Object | null): boolean;
    firstIndex(): number;
    hashCode(): number;
    indexBuffer(): GpuBuffer;
    indexCount(): number;
    indexType(): IndexType;
    toString(): string;
    vertexBuffer(): GpuBuffer;
}