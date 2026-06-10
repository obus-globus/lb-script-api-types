import type { Pair } from '../../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { PoiManager$Occupancy } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager$Occupancy.d.ts'
import type { PoiRecord } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiType } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { WorldBorder } from '../../../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export interface PointOfInterestStorageExtended extends Object {
    lithium$findNearestForPortalLogic(arg0: BlockPos, arg1: number, arg2: Holder<PoiType>, arg3: PoiManager$Occupancy, arg4: (param0: PoiRecord) => boolean, arg5: WorldBorder): Optional<PoiRecord>;
    lithium$getNClosestFirstWithType(arg0: (param0: Holder<PoiType>) => boolean, arg1: (param0: BlockPos) => boolean, arg2: BlockPos, arg3: number, arg4: PoiManager$Occupancy, arg5: number): Pair<Holder<PoiType>, BlockPos>[];
    lithium$takeAt(arg0: (param0: Holder<PoiType>) => boolean, arg1: (param0: Holder<PoiType>, param1: BlockPos) => boolean, arg2: BlockPos): Optional<BlockPos>;
}