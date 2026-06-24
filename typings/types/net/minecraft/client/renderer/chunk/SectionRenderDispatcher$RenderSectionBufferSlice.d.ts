import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SectionRenderDispatcher$RenderSectionBufferSlice extends Record {
    constructor(vertexBuffer: GpuBuffer, vertexBufferOffset: number, indexBuffer: GpuBuffer, indexBufferOffset: number)
    // private indexBuffer: GpuBuffer;
    // private indexBufferOffset: number;
    // private vertexBuffer: GpuBuffer;
    // private vertexBufferOffset: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    indexBuffer(): GpuBuffer;
    indexBufferOffset(): number;
    toString(): string;
    vertexBuffer(): GpuBuffer;
    vertexBufferOffset(): number;
}