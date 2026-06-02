import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsMappingData } from '../../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BackwardsMappingData1_18 extends BackwardsMappingData {
    constructor()
    // private blockEntities: Int2ObjectMap<string>;
    blockEntities(): Int2ObjectMap<string>;
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}