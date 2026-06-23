import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class DimensionRegistryStorage extends Object implements StorableObject {
    constructor()
    // private chatTypes: { [key: string]: any };
    // private dimensions: { [key: string]: Map$Entry<string, Tag>[] };
    addChatType(arg0: number, arg1: Map$Entry<string, Tag>[]): void;
    addDimension(arg0: string, arg1: Map$Entry<string, Tag>[]): void;
    chatType(arg0: number): Map$Entry<string, Tag>[];
    clear(): void;
    dimension(arg0: string): Map$Entry<string, Tag>[];
    onRemove(): void;
}