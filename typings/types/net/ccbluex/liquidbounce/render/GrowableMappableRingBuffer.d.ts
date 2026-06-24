import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GrowableMappableRingBuffer$Companion } from '../../../../net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer$Companion.d.ts'
import type { GrowableMappableRingBuffer$GrowPolicy } from '../../../../net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer$GrowPolicy.d.ts'
import type { MappableRingBuffer } from '../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
/**
 * A growable {@link GpuBuffer} wrapper for streaming GPU data (e.g. dynamic VBO/IBO uploads).
 *
 * This class acts like a simple linear allocator on top of {@link MappableRingBuffer}:
 * multiple uploads can append to the current buffer until it runs out of space,
 * then it automatically rotates to the next backing buffer. If the requested
 * upload is larger than the backing buffer size, the ring is grown.
 *
 * Behavior for each upload(data):
 * 1) If there is enough space after the last write, append to the current buffer.
 * 2) If the buffer is large enough but the remaining space is not, rotate() and write from offset 0.
 * 3) If the entire ring buffer is too small, grow it and write from offset 0.
 *
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:34}
 */
export class GrowableMappableRingBuffer extends Object {
    static Companion: GrowableMappableRingBuffer$Companion;
    /**
     * Checks and closes discarded {@link MappableRingBuffer} instances that are safe to release.
     *
     * This method cleans up old backing buffers that were replaced when the ring buffer grew.
     * It should be called periodically (e.g. end of frame) to ensure GPU resources are released.
     *
     * @see net.ccbluex.liquidbounce.injection.mixins.blaze3d.MixinRenderSystem.onFlipFrame
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L188 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:188}
     */
    static cleanup(): void;
    constructor(label: string, usage: number, growPolicy: GrowableMappableRingBuffer$GrowPolicy)
    // private currentOffset: number;
    readonly growPolicy: GrowableMappableRingBuffer$GrowPolicy;
    readonly label: string;
    // private ring: MappableRingBuffer | null;
    readonly usage: number;
    /**
     * Clear the ring buffer and release all GPU resources.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L146 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:146}
     */
    clear(): void;
    // private ensureCapacityFor(minSize: number): void;
    /**
     * Manually rotate the ring buffer to the next backing buffer and reset the
     * current write offset. This is useful for per-frame usage patterns where
     * each frame starts writing from a fresh buffer.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:136}
     */
    rotate(): void;
    /**
     * Upload {@link data} into the ring buffer and return a slice covering the written region.
     *
     * Upload decision:
     * 1. If the current buffer has enough remaining space, append at {@link currentOffset}.
     * 2. Otherwise, if the buffer is large enough, rotate() and write from offset 0.
     * 3. If the buffer is still too small for this upload, grow the ring and write from 0.
     *
     * @param data The data to upload. Its remaining() bytes will be copied.
     * @returns The uploaded {@link GpuBufferSlice}. Its lifetime is tied to the underlying ring buffer.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:88}
     */
    upload(data: ByteBuffer, alignment: number): GpuBufferSlice;
}