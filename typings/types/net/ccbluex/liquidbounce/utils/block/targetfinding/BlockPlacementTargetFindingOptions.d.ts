import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockOffsetOptions } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockOffsetOptions.d.ts'
import type { BlockPlacementTargetFindingOptions$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTargetFindingOptions$Companion.d.ts'
import type { FaceHandlingOptions } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceHandlingOptions.d.ts'
import type { PlayerLocationOnPlacement } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PlayerLocationOnPlacement.d.ts'
import type { Line } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Parameters used when generating a targeting plan for a block placement.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:67}
 */
export class BlockPlacementTargetFindingOptions extends Object {
    static Companion: BlockPlacementTargetFindingOptions$Companion;
    static leastBlockDistanceToLine(line: Line): (param0: BlockPos, param1: BlockPos) => number;
    static leastBlockDistanceToPos(pos: Vec3): (param0: BlockPos, param1: BlockPos) => number;
    constructor(offsetOptions: BlockOffsetOptions, faceHandlingOptions: FaceHandlingOptions, stackToPlaceWith: ItemStack, playerLocationOnPlacement: PlayerLocationOnPlacement)
    readonly faceHandlingOptions: FaceHandlingOptions;
    readonly offsetOptions: BlockOffsetOptions;
    readonly playerLocationOnPlacement: PlayerLocationOnPlacement;
    readonly stackToPlaceWith: ItemStack;
    component1(): BlockOffsetOptions;
    component2(): FaceHandlingOptions;
    component3(): ItemStack;
    component4(): PlayerLocationOnPlacement;
    copy(offsetOptions: BlockOffsetOptions, faceHandlingOptions: FaceHandlingOptions, stackToPlaceWith: ItemStack, playerLocationOnPlacement: PlayerLocationOnPlacement): BlockPlacementTargetFindingOptions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}