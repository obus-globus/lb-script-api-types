import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { StructuredEnchantmentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/StructuredEnchantmentRewriter.d.ts'
import type { Protocol1_21To1_20_5 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21to1_20_5/Protocol1_21To1_20_5.d.ts'
import type { EnchantmentsPaintingsStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21to1_20_5/storage/EnchantmentsPaintingsStorage.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Enchantments } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Enchantments.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_21 extends BackwardsStructuredItemRewriter<ClientboundPacket1_21, ServerboundPacket1_20_5, Protocol1_21To1_20_5> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21To1_20_5)
    // private enchantmentRewriter: StructuredEnchantmentRewriter;
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    // private backupInconvertibleData(arg0: Item): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    // private restoreInconvertibleData(arg0: Item): void;
    // private rewriteEnchantmentToServer(arg0: EnchantmentsPaintingsStorage, arg1: Item, arg2: StructuredDataKey<Enchantments>): void;
}