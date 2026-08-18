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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:84}
     */
    upload(format: VertexFormat, data: ByteBuffer): GpuBufferSlice;
}