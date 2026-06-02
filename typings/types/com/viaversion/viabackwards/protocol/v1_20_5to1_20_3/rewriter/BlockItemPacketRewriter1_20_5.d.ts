import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { StructuredEnchantmentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/StructuredEnchantmentRewriter.d.ts'
import type { Protocol1_20_5To1_20_3 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_5to1_20_3/Protocol1_20_5To1_20_3.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ItemHasher } from '../../../../../../com/viaversion/viaversion/api/data/item/ItemHasher.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ServerboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ServerboundPacket1_20_3.d.ts'
import type { Protocol1_20_3To1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/Protocol1_20_3To1_20_5.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_20_5 extends BackwardsStructuredItemRewriter<ClientboundPacket1_20_5, ServerboundPacket1_20_3, Protocol1_20_5To1_20_3> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_20_5To1_20_3)
    // private enchantmentRewriter: StructuredEnchantmentRewriter;
    // private vvProtocol: Protocol1_20_3To1_20_5;
    // private cleanInput(arg0: Item): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    handleRewritablesToClient(arg0: UserConnection, arg1: StructuredDataContainer, arg2: ItemHasher): void;
    handleRewritablesToServer(arg0: UserConnection, arg1: StructuredDataContainer): void;
    registerPackets(): void;
    // private removeEmptyList(arg0: Map$Entry<string, Tag>[], arg1: string): void;
}