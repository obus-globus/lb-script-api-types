import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GrowableMappableRingBuffer$GrowPolicy extends Object{
    /**
     * Calculate the new size of the ring buffer.
     *
     * @param requested The requested size for this upload.
     * @param current The current buffer size, or 0 if uninitialized.
     * @returns A new size, which should be >= {@link requested}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L171 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:171}
     */
    getNewSize(requested: number, current: number): number;
}