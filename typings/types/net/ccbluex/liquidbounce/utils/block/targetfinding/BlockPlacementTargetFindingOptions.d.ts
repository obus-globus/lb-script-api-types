import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockOffsetOptions } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockOffsetOptions.d.ts'
import type { BlockPlacementTargetFindingOptions$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTargetFindingOptions$Companion.d.ts'
import type { FaceHandlingOptions } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceHandlingOptions.d.ts'
import type { PlayerLocationOnPlacement } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PlayerLocationOnPlacement.d.ts'
import type { Line } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Parameters used when generating a targeting plan for a block placement.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:70}
 */
export class BlockPlacementTargetFindingOptions extends Object {
    static Companion: BlockPlacementTargetFindingOptions$Companion;
    static leastBlockDistanceToLine(line: Line): (param0: Object) => boolean;
    static leastBlockDistanceToPos(pos: Vec3): (param0: Object) => boolean;
    constructor(offsetOptions: BlockOffsetOptions, faceHandlingOptions: FaceHandlingOptions, stackToPlaceWith: ItemStack, playerLocationOnPlacement: PlayerLocationOnPlacement)
    readonly faceHandlingOptions: FaceHandlingOptions;
    readonly offsetOptions: BlockOffsetOptions;
    readonly playerLocationOnPlacement: PlayerLocationOnPlacement;
    readonly stackToPlaceWith: ItemStack;
}