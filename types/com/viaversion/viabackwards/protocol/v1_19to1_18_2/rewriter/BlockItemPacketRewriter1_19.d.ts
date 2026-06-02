import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { EnchantmentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EnchantmentRewriter.d.ts'
import type { Protocol1_19To1_18_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19to1_18_2/Protocol1_19To1_18_2.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_19 } from '../../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ClientboundPackets1_19.d.ts'
export class BlockItemPacketRewriter1_19 extends BackwardsItemRewriter<ClientboundPackets1_19, ServerboundPackets1_17, Protocol1_19To1_18_2> {
    constructor(arg0: Protocol1_19To1_18_2)
    // private enchantmentRewriter: EnchantmentRewriter;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    registerRewrites(): void;
}