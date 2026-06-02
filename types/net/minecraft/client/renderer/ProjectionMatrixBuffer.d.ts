import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Projection } from '../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
export class ProjectionMatrixBuffer extends Object implements AutoCloseable {
    constructor(name: string)
    // private buffer: GpuBuffer;
    // private bufferSlice: GpuBufferSlice;
    // private lastUploadedProjection: Projection;
    // private projectionMatrixVersion: number;
    // private tempMatrix: Matrix4f;
    close(): void;
    getBuffer(projection: Projection): GpuBufferSlice;
    getBuffer(projectionMatrix: Matrix4f): GpuBufferSlice;
    // private writeBuffer(projectionMatrix: Matrix4f): GpuBufferSlice;
}