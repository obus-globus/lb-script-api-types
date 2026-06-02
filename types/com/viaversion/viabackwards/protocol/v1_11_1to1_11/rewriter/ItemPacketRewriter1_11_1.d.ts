import type { LegacyBlockItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyBlockItemRewriter.d.ts'
import type { LegacyEnchantmentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEnchantmentRewriter.d.ts'
import type { Protocol1_11_1To1_11 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_11_1to1_11/Protocol1_11_1To1_11.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class ItemPacketRewriter1_11_1 extends LegacyBlockItemRewriter<ClientboundPackets1_9_3, ServerboundPackets1_9_3, Protocol1_11_1To1_11> {
    constructor(arg0: Protocol1_11_1To1_11)
    // private enchantmentRewriter: LegacyEnchantmentRewriter;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    registerRewrites(): void;
}