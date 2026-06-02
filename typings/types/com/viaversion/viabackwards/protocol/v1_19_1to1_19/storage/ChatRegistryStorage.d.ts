import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export abstract class ChatRegistryStorage extends Object implements StorableObject {
    constructor()
    // private chatTypes: Int2ObjectMap<Map$Entry<string, Tag>[]>;
    addChatType(arg0: number, arg1: Map$Entry<string, Tag>[]): void;
    chatType(arg0: number): Map$Entry<string, Tag>[];
    clear(): void;
    onRemove(): void;
}