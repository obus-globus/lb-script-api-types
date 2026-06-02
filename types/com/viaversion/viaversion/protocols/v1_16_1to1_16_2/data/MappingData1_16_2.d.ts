import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_16_2 extends MappingDataBase {
    constructor()
    readonly dimensionDataMap: { [key: string]: Map$Entry<string, Tag>[] };
    readonly dimensionRegistry: Map$Entry<string, Tag>[];
    getDimensionDataMap(): { [key: string]: Map$Entry<string, Tag>[] };
    getDimensionRegistry(): Map$Entry<string, Tag>[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}