import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CachedBlockPosSpheres extends Object {
    static INSTANCE: CachedBlockPosSpheres;
    static RADIUS: number;
    RADIUS: number;
    // private indices: number[];
    // private table: number[];
    /**
     * Gets all {@link BlockPos} (long value) within the specified radius range.
     * All positions are sorted by radius (ascending).
     *
     * @param fromRadius the minimum radius (inclusive, 0 to {@link RADIUS})
     * @param toRadius the maximum radius (inclusive, {@link fromRadius} to {@link RADIUS})
     * @returns @throws IndexOutOfBoundsException if {@link fromRadius} or {@link toRadius} is out of range.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/CachedBlockPosSpheres.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/CachedBlockPosSpheres.kt:78}
     */
    rangeLong(fromRadius: number, toRadius: number): (Object | null)[];
}