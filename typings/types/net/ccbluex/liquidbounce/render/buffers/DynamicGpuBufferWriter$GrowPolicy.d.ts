import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DynamicGpuBufferWriter$GrowPolicy extends Object{
    /**
     * Calculate the new buffer size.
     *
     * @param requested The required size for this upload.
     * @param current The current buffer size, or 0 if uninitialized.
     * @returns A new size, which should be >= {@link requested}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt#L155 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt:155}
     */
    getNewSize(requested: number, current: number): number;
}