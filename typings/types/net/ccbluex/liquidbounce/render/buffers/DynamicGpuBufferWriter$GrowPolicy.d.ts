import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DynamicGpuBufferWriter$GrowPolicy extends Object{
    /**
     * Calculate the new buffer size.
     *
     * @param requested The required size for this upload.
     * @param current The current buffer size, or 0 if uninitialized.
     * @returns A new size, which should be >= {@link requested}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt#L155 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/DynamicGpuBufferWriter.kt:155}
     */
    getNewSize(requested: number, current: number): number;
}