import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MeshDraw$VertexUploader extends Object{
    /**
     * Uploads vertex data.
     *
     * The returned slice's byte offset must be aligned to {@link VertexFormat.vertexSize} for {@link format}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:84}
     */
    upload(format: VertexFormat, data: ByteBuffer): GpuBufferSlice;
}