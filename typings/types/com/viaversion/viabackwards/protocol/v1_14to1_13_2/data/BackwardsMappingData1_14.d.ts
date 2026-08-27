import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsMappingData } from '../../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BackwardsMappingData1_14 extends BackwardsMappingData {
    static nameFromIdentifier(paramarg0: string): string;
    constructor()
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}