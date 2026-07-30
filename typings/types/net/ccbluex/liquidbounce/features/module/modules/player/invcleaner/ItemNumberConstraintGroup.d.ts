import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
/**
 * Defines an item constraint group.
 *
 * For example if we had two constraints:
 * - `BLOCKS` -> `128..`
 * - `TNT` -> `..64`
 *
 * Imagine a situation where the player has 125 TNT:
 * - If the TNT was processed first it would be thrown out since the TNT limit says that we have too much TNT.
 * - If the BLOCKS constraint was processed first, the TNT would be kept since the BLOCKS constraint is not yet
 * satisfied.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraints.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraints.kt:34}
 */
export abstract class ItemNumberConstraintGroup extends Object {
    constructor(acceptableRange: { start: number; endInclusive: number; step: number }, priority: number)
    /**
     * The range of desired item amounts (which might be raw item counts, food saturation, etc.):
     * - The lower limit defines the desired amount of items (=> any more items *might* be thrown out)
     * - The upper limit defines the maximum amount of items (=> any more items *will* be thrown out)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraints.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraints.kt:40}
     */
    readonly acceptableRange: { start: number; endInclusive: number; step: number };
    /**
     * The priority of this constraint group. Lower values are processed first.
     * It Affects the order in which items are processed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraints.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraints.kt:45}
     */
    readonly priority: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
}