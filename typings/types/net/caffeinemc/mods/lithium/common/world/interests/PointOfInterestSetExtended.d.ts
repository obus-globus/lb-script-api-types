import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { PoiManager$Occupancy } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager$Occupancy.d.ts'
import type { PoiRecord } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiType } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export interface PointOfInterestSetExtended extends Object {
    lithium$collectMatchingPoints(arg0: (param0: Holder<PoiType>) => boolean, arg1: PoiManager$Occupancy, arg2: (param0: PoiRecord) => void): void;
    lithium$collectMatchingPointsL2Limited(arg0: BlockPos, arg1: number, arg2: (param0: Holder<PoiType>) => boolean, arg3: (param0: PoiRecord) => boolean, arg4: (param0: PoiRecord) => void, arg5: number): void;
    lithium$collectMatchingPointsL2Limited(arg0: BlockPos, arg1: number, arg2: (param0: Holder<PoiType>) => boolean, arg3: PoiManager$Occupancy, arg4: (param0: PoiRecord) => void, arg5: number): void;
    lithium$getAt(arg0: BlockPos): PoiRecord;
    lithium$getFirstMatchingPoint(arg0: BlockPos, arg1: number, arg2: (param0: Holder<PoiType>) => boolean, arg3: (param0: BlockPos) => boolean, arg4: PoiManager$Occupancy): PoiRecord;
    lithium$getL2ClosestMatchingPoint(arg0: BlockPos, arg1: (param0: Holder<PoiType>) => boolean, arg2: (param0: PoiRecord) => boolean): PoiRecord;
    lithium$getL2ClosestMatchingPoint(arg0: BlockPos, arg1: (param0: Holder<PoiType>) => boolean, arg2: PoiManager$Occupancy): PoiRecord;
    lithium$iterate(arg0: (param0: Holder<PoiType>) => boolean): Iterator<PoiRecord>;
}