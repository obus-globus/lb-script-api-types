import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
import type { Protocol1_15_2To1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/Protocol1_15_2To1_16.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ItemPacketRewriter1_16 extends ItemRewriter<ClientboundPackets1_15, ServerboundPackets1_16, Protocol1_15_2To1_16> {
    static newToOldAttributes(paramarg0: Item): void;
    static oldToNewAttributes(paramarg0: Item): void;
    static rewriteAttributeName(paramarg0: Map$Entry<string, Tag>[], paramarg1: string, paramarg2: boolean): void;
    constructor(arg0: Protocol1_15_2To1_16)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}