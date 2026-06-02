import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsMappingData } from '../../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BackwardsMappingData1_19 extends BackwardsMappingData {
    constructor()
    // private defaultChatTypes: Int2ObjectMap<Map$Entry<string, Tag>[]>;
    chatType(arg0: number): Map$Entry<string, Tag>[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}