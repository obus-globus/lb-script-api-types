import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { HashedItem } from '../../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ItemRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ItemRewriter.d.ts'
import type { RewriterBase } from '../../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { LegacyItemRewriter$NonExistentEntry } from '../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter$NonExistentEntry.d.ts'
import type { LegacyItemRewriter$RewriteEntry } from '../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter$RewriteEntry.d.ts'
export abstract class LegacyItemRewriter<C extends ClientboundPacketType, S extends ServerboundPacketType, P extends Protocol<C, any, any, S>> extends RewriterBase<P> implements ItemRewriter<P> {
    constructor(arg0: P, arg1: string, arg2: Type<Item>, arg3: Type<Item[]>)
    constructor(arg0: P, arg1: string, arg2: Type<Item>, arg3: Type<Item[]>, arg4: Type<Item>, arg5: Type<Item[]>)
    // private itemArrayType: Type<Item[]>;
    // private itemType: Type<Item>;
    // private mappedItemArrayType: Type<Item[]>;
    // private mappedItemType: Type<Item>;
    // private nonExistentItems: LegacyItemRewriter$NonExistentEntry[];
    // private protocolName: string;
    // private rewriteEntries: LegacyItemRewriter$RewriteEntry[];
    addNonExistentItem(arg0: number, arg1: number): void;
    addNonExistentItem(arg0: number, arg1: number, arg2: number): void;
    addNonExistentItemRange(arg0: number, arg1: number): void;
    addNonExistentItems(...arg0: number[]): void;
    addRemappedItem(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): void;
    addRemappedItem(arg0: number, arg1: number, arg2: number, arg3: string): void;
    addRemappedItem(arg0: number, arg1: number, arg2: string): void;
    // private handleClientboundItem(arg0: PacketWrapper): void;
    handleHashedItem(arg0: UserConnection, arg1: HashedItem): HashedItem;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    // private handleServerboundItem(arg0: PacketWrapper): void;
    itemArrayType(): Type<Item[]>;
    itemTemplateType(): Type<Item>;
    itemType(): Type<Item>;
    mappedItemArrayType(): Type<Item[]>;
    mappedItemTemplateType(): Type<Item>;
    mappedItemType(): Type<Item>;
    nbtTagName(): string;
    nbtTagName(arg0: string): string;
    registerCreativeInventoryAction(arg0: S): void;
    // private setRemappedNameRead(arg0: Item, arg1: string): void;
    // private setRemappedTagWrite(arg0: Item): void;
}