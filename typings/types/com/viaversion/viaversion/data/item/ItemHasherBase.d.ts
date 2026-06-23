import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ItemHasher } from '../../../../../com/viaversion/viaversion/api/data/item/ItemHasher.d.ts'
import type { CodecContext } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { Hasher } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/hash/Hasher.d.ts'
import type { HashedItem } from '../../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { OriginalHashedItem } from '../../../../../com/viaversion/viaversion/data/item/OriginalHashedItem.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ItemHasherBase extends Object implements ItemHasher {
    static UNKNOWN_HASH: number;
    static toHashedItem(paramarg0: Hasher, paramarg1: Item): HashedItem;
    constructor(arg0: Protocol<any, any, any, any>, arg1: UserConnection)
    // private connection: UserConnection;
    // private context: CodecContext;
    // private hashes: { [key: number]: OriginalHashedItem };
    // private mappedContext: CodecContext;
    readonly processingClientboundInventoryPacket: boolean;
    // private hashTag(arg0: Map$Entry<string, Tag>[]): number;
    isProcessingClientboundInventoryPacket(): boolean;
    originalHashedItem(arg0: number, arg1: HashedItem): OriginalHashedItem;
    setProcessingClientboundInventoryPacket(arg0: boolean): void;
    toHashedItem(arg0: Item, arg1: boolean): HashedItem;
    trackOriginalHashedItem(arg0: Map$Entry<string, Tag>[], arg1: HashedItem, arg2: string): void;
}