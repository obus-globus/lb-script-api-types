import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_21_11 extends MappingDataBase {
    constructor()
    // private timelineRegistry: Map$Entry<string, Tag>[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    timelineRegistry(): Map$Entry<string, Tag>[];
}