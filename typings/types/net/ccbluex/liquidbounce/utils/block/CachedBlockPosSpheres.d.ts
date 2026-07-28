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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/CachedBlockPosSpheres.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/CachedBlockPosSpheres.kt:78}
     */
    rangeLong(fromRadius: number, toRadius: number): (Object | null)[];
}