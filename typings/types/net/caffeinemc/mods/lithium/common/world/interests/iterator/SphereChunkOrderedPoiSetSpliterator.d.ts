import type { BitSet } from '../../../../../../../../java/util/BitSet.d.ts'
import type { Spliterators$AbstractSpliterator } from '../../../../../../../../java/util/Spliterators$AbstractSpliterator.d.ts'
import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Iterator } from '../../../../../../../../java/util/Iterator.d.ts'
import type { RegionBasedStorageSectionExtended } from '../../../../../../../../net/caffeinemc/mods/lithium/common/world/interests/RegionBasedStorageSectionExtended.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { PoiManager$Occupancy } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager$Occupancy.d.ts'
import type { PoiRecord } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiSection } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiSection.d.ts'
import type { PoiType } from '../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export class SphereChunkOrderedPoiSetSpliterator extends Spliterators$AbstractSpliterator<PoiRecord> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number, arg1: BlockPos, arg2: RegionBasedStorageSectionExtended<PoiSection>, arg3: (param0: Holder<PoiType>) => kotlin.Boolean, arg4: PoiManager$Occupancy)
    // private chunkLimit: number;
    // private chunkPoiSections: BitSet;
    // private chunkX: number;
    // private chunkYMin: number;
    // private chunkZ: number;
    // private iteratedChunks: number;
    // private maxChunkX: number;
    // private minChunkX: number;
    // private nextPoiSectionIndex: number;
    // private origin: BlockPos;
    // private radiusSq: number;
    // private sectionIterator: Iterator<PoiRecord>;
    // private status: PoiManager$Occupancy;
    // private storage: RegionBasedStorageSectionExtended<PoiSection>;
    // private typeFilter: (param0: Holder<PoiType>) => kotlin.Boolean;
    // private getSectionIterator(arg0: number, arg1: number, arg2: number): Iterator<PoiRecord>;
    // private nextChunk(): boolean;
    // private nextSection(): boolean;
    tryAdvance(arg0: (param0: PoiRecord) => void): boolean;
}