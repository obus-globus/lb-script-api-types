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
     * @throws IndexOutOfBoundsException if {@link fromRadius} or {@link toRadius} is out of range.
     *
     * @param fromRadius the minimum radius (inclusive, 0 to {@link RADIUS})
     * @param toRadius the maximum radius (inclusive, {@link fromRadius} to {@link RADIUS})
     * @returns a sorted immutable {@link LongList} view containing the block positions of radius range.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/CachedBlockPosSpheres.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/CachedBlockPosSpheres.kt:69}
     */
    rangeLong(fromRadius: number, toRadius: number): (Object | null)[];
}