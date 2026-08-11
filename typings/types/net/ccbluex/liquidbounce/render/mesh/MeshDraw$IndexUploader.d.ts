import type { IndexType } from '../../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MeshDraw$IndexUploader extends Object{
    /**
     * Uploads index data.
     *
     * The returned slice's byte offset must be aligned to {@link IndexType.bytes} for {@link type}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:93}
     */
    upload(type: IndexType, data: ByteBuffer): GpuBufferSlice;
}