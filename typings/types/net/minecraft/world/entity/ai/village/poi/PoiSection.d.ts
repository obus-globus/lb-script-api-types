import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { PointOfInterestSetExtended } from '../../../../../../../net/caffeinemc/mods/lithium/common/world/interests/PointOfInterestSetExtended.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { DebugPoiInfo } from '../../../../../../../net/minecraft/util/debug/DebugPoiInfo.d.ts'
import type { PoiManager$Occupancy } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager$Occupancy.d.ts'
import type { PoiRecord } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiSection$Packed } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiSection$Packed.d.ts'
import type { PoiType } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export class PoiSection extends Object implements PointOfInterestSetExtended {
    constructor(setDirty: () => void)
    private constructor(setDirty: () => void, isValid: boolean, records: PoiRecord[])
    // private byType: Map<Holder<PoiType>, PoiRecord[]>;
    // private isValid: boolean;
    // private records: Short2ObjectMap<PoiRecord>;
    // private setDirty: () => void;
    add(blockPos: BlockPos, type: Holder<PoiType>): PoiRecord;
    // private add(record: PoiRecord): boolean;
    // private clear(): void;
    // private collectMatchingPointsL2Limited(arg0: BlockPos, arg1: number, arg2: (param0: Object) => boolean, arg3: (param0: Object) => boolean, arg4: (param0: Object) => void, arg5: number): void;
    // private collectMatchingPointsL2Limited(arg0: BlockPos, arg1: number, arg2: Holder<Object>, arg3: (param0: Object) => boolean, arg4: (param0: Object) => void, arg5: number): void;
    // private collectWithDynamicTypeFilter(arg0: (param0: Object) => boolean, arg1: PoiManager$Occupancy, arg2: (param0: Object) => void): void;
    // private collectWithSingleTypeFilter(arg0: Holder<Object>, arg1: PoiManager$Occupancy, arg2: (param0: Object) => void): void;
    exists(pos: BlockPos, predicate: (param0: Holder<PoiType>) => boolean): boolean;
    getDebugPoiInfo(pos: BlockPos): Optional<DebugPoiInfo>;
    // private getFirstMatchingPoint(arg0: BlockPos, arg1: number, arg2: (param0: Object) => boolean, arg3: (param0: Object) => boolean, arg4: PoiManager$Occupancy): PoiRecord;
    // private getFirstMatchingPoint(arg0: BlockPos, arg1: number, arg2: Holder<Object>, arg3: (param0: Object) => boolean, arg4: PoiManager$Occupancy): PoiRecord;
    getFreeTickets(pos: BlockPos): number;
    // private getL2ClosestMatchingPoint(arg0: BlockPos, arg1: (param0: Object) => boolean, arg2: (param0: Object) => boolean): PoiRecord;
    // private getL2ClosestMatchingPoint(arg0: BlockPos, arg1: Holder<Object>, arg2: (param0: Object) => boolean): PoiRecord;
    // private getPoiRecord(pos: BlockPos): Optional<PoiRecord>;
    getRecords(predicate: (param0: Holder<PoiType>) => boolean, occupancy: PoiManager$Occupancy): Stream<PoiRecord>;
    getType(pos: BlockPos): Optional<Holder<PoiType>>;
    isValid(): boolean;
    // private iterateWithDynamicTypeFilter(arg0: (param0: Object) => boolean): Iterator<Object>;
    // private iterateWithSingleTypeFilter(arg0: Holder<Object>): Iterator<Object>;
    lithium$collectMatchingPoints(arg0: (param0: Object) => boolean, arg1: PoiManager$Occupancy, arg2: (param0: Object) => void): void;
    lithium$collectMatchingPointsL2Limited(arg0: BlockPos, arg1: number, arg2: (param0: Holder<PoiType>) => boolean, arg3: PoiManager$Occupancy, arg4: (param0: PoiRecord) => void, arg5: number): void;
    lithium$collectMatchingPointsL2Limited(arg0: BlockPos, arg1: number, arg2: (param0: Object) => boolean, arg3: (param0: Object) => boolean, arg4: (param0: Object) => void, arg5: number): void;
    lithium$getAt(arg0: BlockPos): PoiRecord;
    lithium$getFirstMatchingPoint(arg0: BlockPos, arg1: number, arg2: (param0: Object) => boolean, arg3: (param0: Object) => boolean, arg4: PoiManager$Occupancy): PoiRecord;
    lithium$getL2ClosestMatchingPoint(arg0: BlockPos, arg1: (param0: Holder<PoiType>) => boolean, arg2: PoiManager$Occupancy): PoiRecord;
    lithium$getL2ClosestMatchingPoint(arg0: BlockPos, arg1: (param0: Object) => boolean, arg2: (param0: Object) => boolean): PoiRecord;
    lithium$iterate(arg0: (param0: Object) => boolean): Iterator<Object>;
    pack(): PoiSection$Packed;
    refresh(updater: (param0: (param0: BlockPos, param1: Holder<PoiType>) => void) => void): void;
    release(pos: BlockPos): boolean;
    remove(pos: BlockPos): void;
}