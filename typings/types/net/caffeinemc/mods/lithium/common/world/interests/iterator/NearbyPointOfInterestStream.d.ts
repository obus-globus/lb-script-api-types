import type { LongIterator } from '../../../../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Spliterators$AbstractSpliterator } from '../../../../../../../../java/util/Spliterators$AbstractSpliterator.d.ts'
import type { BiPredicate } from '../../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SortedPointOfInterest } from '../../../../../../../../net/caffeinemc/mods/lithium/common/util/tuples/SortedPointOfInterest.d.ts'
import type { RegionBasedStorageSectionExtended } from '../../../../../../../../net/caffeinemc/mods/lithium/common/world/interests/RegionBasedStorageSectionExtended.d.ts'
import type { NearbyPointOfInterestStream$QueuedSection } from '../../../../../../../../net/caffeinemc/mods/lithium/common/world/interests/iterator/NearbyPointOfInterestStream$QueuedSection.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { PoiManager$Occupancy } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager$Occupancy.d.ts'
import type { PoiRecord } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiSection } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiSection.d.ts'
import type { PoiType } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export class NearbyPointOfInterestStream extends Spliterators$AbstractSpliterator<PoiRecord> implements Consumer<PoiRecord> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NEGATIVE_Y_POINT_COMPARATOR: (param0: Object) => boolean;
    static NONNULL: number;
    static ORDERED: number;
    static POINT_COMPARATOR: (param0: Object) => boolean;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: (param0: Holder<PoiType>) => boolean, arg1: PoiManager$Occupancy, arg2: (param0: PoiRecord) => boolean, arg3: BlockPos, arg4: number, arg5: RegionBasedStorageSectionExtended<PoiSection>, arg6: (param0: BlockPos, param1: BlockPos) => boolean, arg7: (param0: Object) => boolean)
    // private afterSortingPredicate: (param0: PoiRecord) => boolean;
    // private chunkYMin: number;
    // private clampedOriginChunkY: number;
    // private closestRingDistanceSq: number;
    // private distanceLimit: (param0: BlockPos, param1: BlockPos) => boolean;
    // private forciblyDeplete: boolean;
    // private forciblyDepleteTrigger: number;
    // private minChunkYDistSq: number;
    // private minCollectedElementDistanceSq: number;
    // private minCollectedElementIndex: number;
    // private nextPointIndex: number;
    // private nextSectionDistanceSq: number;
    // private occupationStatus: PoiManager$Occupancy;
    // private origin: BlockPos;
    // private pointComparatorWithoutInSectionOrder: (param0: Object) => boolean;
    // private points: SortedPointOfInterest[];
    // private queuedPOISections: NearbyPointOfInterestStream$QueuedSection[];
    // private queuedSectionsSearched: number;
    // private ring: number;
    // private ringClosestEdgeDistance: number;
    // private ringIterator: LongIterator;
    // private ringMax: number;
    // private sortedToIndex: number;
    // private storage: RegionBasedStorageSectionExtended<PoiSection>;
    // private typeSelector: (param0: Holder<PoiType>) => boolean;
    accept(arg0: PoiRecord): void;
    andThen(arg0: (param0: PoiRecord) => void): (param0: PoiRecord) => void;
    // private collectPoint(arg0: PoiRecord): void;
    getFirst(): PoiRecord;
    // private getMinimumNextPotentialDistanceSq(): number;
    // private getNextSectionDistanceSq(): number;
    // private getPotentialRingDistanceSq(): number;
    // private getRingsOfChunksIterator(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): LongIterator;
    // private getYDistanceFromBitIndex(arg0: number): number;
    // private isSectionListEmpty(): boolean;
    // private keepAddingRingsUntilSufficient(): void;
    // private sortSectionList(): void;
    tryAdvance(arg0: (param0: PoiRecord) => void): boolean;
    // private tryAdvancePoint(arg0: (param0: PoiRecord) => void): boolean;
    // private updateMinPoint(arg0: SortedPointOfInterest, arg1: number): void;
}