import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicUniformStorage } from '../../../../net/minecraft/client/renderer/DynamicUniformStorage.d.ts'
import type { DynamicUniforms$ChunkSectionInfo } from '../../../../net/minecraft/client/renderer/DynamicUniforms$ChunkSectionInfo.d.ts'
import type { DynamicUniforms$Transform } from '../../../../net/minecraft/client/renderer/DynamicUniforms$Transform.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
export class DynamicUniforms extends Object implements AutoCloseable {
    static CHUNK_SECTION_UBO_SIZE: number;
    static TRANSFORM_UBO_SIZE: number;
    constructor()
    // private chunkSections: DynamicUniformStorage<DynamicUniforms$ChunkSectionInfo>;
    // private transforms: DynamicUniformStorage<DynamicUniforms$Transform>;
    close(): void;
    reset(): void;
    writeChunkSections(infos: DynamicUniforms$ChunkSectionInfo[]): GpuBufferSlice[];
    writeTransform(modelView: Matrix4fc, colorModulator: Vector4fc, modelOffset: Vector3fc, textureMatrix: Matrix4fc): GpuBufferSlice;
    writeTransforms(transforms: DynamicUniforms$Transform[]): GpuBufferSlice[];
}