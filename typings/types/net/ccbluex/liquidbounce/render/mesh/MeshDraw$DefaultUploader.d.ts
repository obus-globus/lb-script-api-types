import type { IndexType } from '../../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DynamicGpuBufferWriter } from '../../../../../net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.d.ts'
import type { MeshDraw$IndexUploader } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$IndexUploader.d.ts'
import type { MeshDraw$VertexUploader } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$VertexUploader.d.ts'
export class MeshDraw$DefaultUploader extends Object implements MeshDraw$IndexUploader, MeshDraw$VertexUploader {
    // private sharedIbo: DynamicGpuBufferWriter;
    // private sharedVbo: DynamicGpuBufferWriter;
    close(): void;
    endFrame(): void;
    upload(type: IndexType, data: ByteBuffer): GpuBufferSlice;
    upload(format: VertexFormat, data: ByteBuffer): GpuBufferSlice;
}