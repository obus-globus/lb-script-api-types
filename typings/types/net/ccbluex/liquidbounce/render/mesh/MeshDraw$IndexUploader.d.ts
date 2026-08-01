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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:93}
     */
    upload(type: IndexType, data: ByteBuffer): GpuBufferSlice;
}