import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { LedgeAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/LedgeAction.d.ts'
import type { ScaffoldLedgeExtension } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldLedgeExtension.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
export class ScaffoldLedgeFeatureKt extends Object {
    static ledge(target: BlockPlacementTarget | null, rotation: Rotation, extension: ScaffoldLedgeExtension | null): LedgeAction;
}