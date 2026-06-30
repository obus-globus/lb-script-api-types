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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:50}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L204 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:204}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L157 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:157}
     */
    clear(): void;
    // private ensureCapacityFor(minSize: number): void;
    /**
     * Manually rotate the ring buffer to the next backing buffer and reset the
     * current write offset. This is useful for per-frame usage patterns where
     * each frame starts writing from a fresh buffer.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:149}
     */
    rotate(): void;
    /**
     * Upload {@link data} into the ring buffer and return a slice covering the written region.
     *
     * Upload decision:
     * 1. Align the current write offset to {@link alignment}.
     * 2. If the current buffer has enough remaining space, append at the aligned offset.
     * 3. Otherwise, if the buffer is large enough, rotate() and write from offset 0.
     * 4. If the buffer is still too small for this upload, grow the ring and write from 0.
     *
     * @param data The data to upload. Its remaining() bytes will be copied.
     * @param alignment Byte alignment for the returned slice offset.
     * @returns The uploaded {@link GpuBufferSlice}. Its lifetime is tied to the underlying ring buffer.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:102}
     */
    upload(data: ByteBuffer, alignment: number): GpuBufferSlice;
}