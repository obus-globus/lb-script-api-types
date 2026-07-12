import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DynamicGpuBufferWriter$GrowPolicy } from '../../../../../net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter$GrowPolicy.d.ts'
import type { FrameGpuBufferPool } from '../../../../../net/ccbluex/liquidbounce/render/buffers/FrameGpuBufferPool.d.ts'
/**
 * Per-frame dynamic {@link com.mojang.blaze3d.buffers.GpuBuffer} writer for streaming VBO/IBO uploads.
 *
 * Follows vanilla's {@link net.minecraft.client.renderer.StagedVertexBuffer} pattern:
 * CPU data is written to a properly-flagged GPU buffer via {@link com.mojang.blaze3d.systems.CommandEncoder.writeToBuffer},
 * which performs an immediate DMA copy without mapping. Buffers are recycled via fence when the GPU
 * has finished consuming them.
 *
 * Unlike {@link net.minecraft.client.renderer.MappableRingBuffer},
 * this class does not use persistent mapping, avoiding the fence
 * issue of wrapping within a single command encoder submit.
 *
 * ## Lifecycle
 * - {@link upload}: acquire/write data (auto-grows buffer as needed)
 * - {@link endFrame}: fence the current buffer for recycling
 *
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt:49}
 */
export class DynamicGpuBufferWriter extends Object implements AutoCloseable {
    constructor(label: string, usage: number, growPolicy: DynamicGpuBufferWriter$GrowPolicy)
    // private closed: boolean;
    // private currentBuffer: GpuBuffer | null;
    readonly growPolicy: DynamicGpuBufferWriter$GrowPolicy;
    // private highWaterCapacity: number;
    readonly label: string;
    // private peakBytesThisFrame: number;
    // private pool: FrameGpuBufferPool;
    readonly usage: number;
    // private writeOffset: number;
    close(): void;
    /**
     * End the current frame: fence all buffers used by this writer for deferred recycling.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt:121}
     */
    endFrame(): void;
    /**
     * Peak bytes written in the current frame (for adaptive sizing).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt#L145 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt:145}
     */
    peakBytes(): number;
    /**
     * Upload {@link data} into the buffer and return a slice.
     *
     * @param data Byte data to upload. Its {@link java.nio.Buffer.remaining} bytes are copied.
     * @param alignment Byte alignment for the slice offset.
     * @returns A {@link com.mojang.blaze3d.buffers.GpuBufferSlice} covering the uploaded region.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt:70}
     */
    upload(data: ByteBuffer, alignment: number): GpuBufferSlice;
}