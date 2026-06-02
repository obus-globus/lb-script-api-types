import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_20_2To1_20 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_2to1_20/Protocol1_20_2To1_20.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ServerboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ServerboundPackets1_19_4.d.ts'
import type { ClientboundPackets1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPackets1_20_2.d.ts'
export class BlockItemPacketRewriter1_20_2 extends BackwardsItemRewriter<ClientboundPackets1_20_2, ServerboundPackets1_19_4, Protocol1_20_2To1_20> {
    constructor(arg0: Protocol1_20_2To1_20)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}