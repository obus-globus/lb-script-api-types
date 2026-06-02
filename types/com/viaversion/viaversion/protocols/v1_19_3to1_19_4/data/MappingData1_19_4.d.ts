import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_19_4 extends MappingDataBase {
    constructor()
    // private damageTypesRegistry: Map$Entry<string, Tag>[];
    damageTypesRegistry(): Map$Entry<string, Tag>[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}