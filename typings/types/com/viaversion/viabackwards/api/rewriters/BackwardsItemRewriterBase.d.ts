import type { StringTag } from '../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ItemRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class BackwardsItemRewriterBase<C extends ClientboundPacketType, S extends ServerboundPacketType, T extends BackwardsProtocol<C, Object, Object, S>> extends ItemRewriter<C, S, T> {
    constructor(arg0: T, arg1: Type<Item>, arg2: Type<Item[]>, arg3: Type<Item>, arg4: Type<Item[]>, arg5: boolean)
    constructor(arg0: T, arg1: Type<Item>, arg2: Type<Item[]>, arg3: boolean)
    // private jsonNameFormat: boolean;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    hasBackupTag(arg0: Map$Entry<string, Tag>[], arg1: string): boolean;
    nbtTagName(): string;
    nbtTagName(arg0: string): string;
    restoreDisplayTag(arg0: Item): void;
    restoreListTag(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    restoreStringTag(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    saveListTag(arg0: Map$Entry<string, Tag>[], arg1: Tag[], arg2: string): void;
    saveStringTag(arg0: Map$Entry<string, Tag>[], arg1: StringTag, arg2: string): void;
}