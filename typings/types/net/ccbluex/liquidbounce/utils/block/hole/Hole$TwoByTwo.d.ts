import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Hole } from '../../../../../../net/ccbluex/liquidbounce/utils/block/hole/Hole.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
/**
 * ```
 * ? x x ?
 * x o o x
 * x o o x
 * ? x x ?
 * ```
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/hole/Hole.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/hole/Hole.kt:109}
 */
export class Hole$TwoByTwo extends Object implements Hole {
    constructor(pos: BlockPos, bedrockOnly: boolean)
    readonly bedrockOnly: boolean;
    readonly pos: BlockPos;
    readonly positions: BoundingBox;
    readonly size: number;
    asList(): BlockPos[];
    compareTo(other: Hole): number;
    component1(): BlockPos;
    component2(): boolean;
    contains(pos: Vec3i): boolean;
    copy(pos: BlockPos, bedrockOnly: boolean): Hole$TwoByTwo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isInvalidatedByFilling(pos: Vec3i): boolean;
    toString(): string;
}