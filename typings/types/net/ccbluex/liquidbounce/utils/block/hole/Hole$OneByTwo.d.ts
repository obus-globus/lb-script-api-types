import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Hole } from '../../../../../../net/ccbluex/liquidbounce/utils/block/hole/Hole.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
/**
 * ```
 * ? x x ?
 * x o o x
 * ? x x ?
 * ```
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/hole/Hole.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/hole/Hole.kt:81}
 */
export class Hole$OneByTwo extends Object implements Hole {
    constructor(pos: BlockPos, axis: Direction$Axis, bedrockOnly: boolean)
    readonly axis: Direction$Axis;
    readonly bedrockOnly: boolean;
    // private other: BlockPos;
    readonly pos: BlockPos;
    readonly positions: BoundingBox;
    readonly size: number;
    asList(): BlockPos[];
    compareTo(other: Hole): number;
    component1(): BlockPos;
    component2(): Direction$Axis;
    component3(): boolean;
    contains(pos: Vec3i): boolean;
    copy(pos: BlockPos, axis: Direction$Axis, bedrockOnly: boolean): Hole$OneByTwo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isInvalidatedByFilling(pos: Vec3i): boolean;
    toString(): string;
}