import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export interface Hole extends Object, Comparable<Hole>{
    readonly bedrockOnly: boolean;
    readonly pos: BlockPos;
    readonly positions: BoundingBox;
    readonly size: number;
    asList(): BlockPos[];
    compareTo(other: Hole): number;
    contains(pos: Vec3i): boolean;
    /**
     * Checks whether placing a block at {@link pos} would invalidate this hole.
     *
     * A block can invalidate the hole if its position falls within the hole's
     * area, extended upward by 2 blocks to account for the player's height.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/hole/Hole.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/hole/Hole.kt:49}
     */
    isInvalidatedByFilling(pos: Vec3i): boolean;
}