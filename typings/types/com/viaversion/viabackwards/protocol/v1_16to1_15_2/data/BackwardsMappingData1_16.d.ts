import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsMappingData } from '../../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BackwardsMappingData1_16 extends BackwardsMappingData {
    constructor()
    readonly attributeMappings: JavaMap<string, string>;
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    mappedAttributeIdentifier(arg0: string): string;
}