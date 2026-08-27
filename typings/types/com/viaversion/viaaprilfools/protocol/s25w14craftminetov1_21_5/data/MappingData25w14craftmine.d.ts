import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { VAFBackwardsMappingData } from '../../../../../../com/viaversion/viaaprilfools/api/data/VAFBackwardsMappingData.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData25w14craftmine extends VAFBackwardsMappingData {
    static nameFromIdentifier(paramarg0: string): string;
    constructor()
    // private TRANSLATIONS: JavaMap<string, string>;
    // private WORLD_EFFECTS: Map$Entry<string, Tag>[][];
    getTranslation(arg0: string): string;
    getWorldEffect(arg0: number): Map$Entry<string, Tag>[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}