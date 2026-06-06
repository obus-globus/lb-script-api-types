import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GrowableMappableRingBuffer$GrowPolicy extends Object{
    /**
     * Calculate the new size of the ring buffer.
     *
     * @param requested The requested size for this upload.
     * @param current The current buffer size, or 0 if uninitialized.
     * @returns A new size, which should be >= {@link requested}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt#L156 | src/main/kotlin/net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.kt:156}
     */
    getNewSize(requested: number, current: number): number;
}