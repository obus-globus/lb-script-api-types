import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_16_2To1_16_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16_2to1_16_1/Protocol1_16_2To1_16_1.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_16_2 extends BackwardsItemRewriter<ClientboundPackets1_16_2, ServerboundPackets1_16, Protocol1_16_2To1_16_1> {
    constructor(arg0: Protocol1_16_2To1_16_1)
    // private addValueHashAsId(arg0: Map$Entry<string, Tag>[]): void;
    // private handleBlockEntity(arg0: Map$Entry<string, Tag>[]): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}