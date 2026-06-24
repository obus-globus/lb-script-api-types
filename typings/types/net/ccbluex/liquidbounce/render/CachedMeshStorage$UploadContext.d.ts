import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CachedMeshStorage } from '../../../../net/ccbluex/liquidbounce/render/CachedMeshStorage.d.ts'
import type { MeshDraw$IndexUploader } from '../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$IndexUploader.d.ts'
import type { MeshDraw$VertexUploader } from '../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$VertexUploader.d.ts'
export class CachedMeshStorage$UploadContext extends Object implements MeshDraw$IndexUploader, MeshDraw$VertexUploader {
    private constructor(null_: CachedMeshStorage)
    // private indexBuffer: GpuBuffer;
    // private vertexBuffer: GpuBuffer;
    // private release(): void;
    upload(arg0: IndexType, arg1: ByteBuffer): GpuBufferSlice;
    upload(arg0: VertexFormat, arg1: ByteBuffer): GpuBufferSlice;
}