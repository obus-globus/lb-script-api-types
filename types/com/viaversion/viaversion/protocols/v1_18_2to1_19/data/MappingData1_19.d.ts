import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_19 extends MappingDataBase {
    constructor()
    // private chatRegistry: Map$Entry<string, Tag>[];
    // private defaultChatTypes: Int2ObjectMap<Map$Entry<string, Tag>[]>;
    chatRegistry(): Map$Entry<string, Tag>[];
    chatType(arg0: number): Map$Entry<string, Tag>[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}