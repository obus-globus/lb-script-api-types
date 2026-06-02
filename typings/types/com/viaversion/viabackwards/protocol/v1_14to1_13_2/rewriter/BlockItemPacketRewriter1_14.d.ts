import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { EnchantmentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EnchantmentRewriter.d.ts'
import type { Protocol1_14To1_13_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/Protocol1_14To1_13_2.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
export class BlockItemPacketRewriter1_14 extends BackwardsItemRewriter<ClientboundPackets1_14, ServerboundPackets1_13, Protocol1_14To1_13_2> {
    constructor(arg0: Protocol1_14To1_13_2)
    // private enchantmentRewriter: EnchantmentRewriter;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    registerRewrites(): void;
}