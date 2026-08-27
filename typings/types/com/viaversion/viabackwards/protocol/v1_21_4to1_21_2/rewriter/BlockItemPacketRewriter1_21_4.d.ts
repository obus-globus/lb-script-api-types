import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsFullStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsFullStructuredItemRewriter.d.ts'
import type { Protocol1_21_4To1_21_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_4to1_21_2/Protocol1_21_4To1_21_2.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { CustomModelData1_21_4 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/CustomModelData1_21_4.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { ServerboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ServerboundPacket1_21_2.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_21_4 extends BackwardsFullStructuredItemRewriter<ClientboundPacket1_21_2, ServerboundPacket1_21_2, Protocol1_21_4To1_21_2> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21_4To1_21_2)
    // private customModelDataFromTag(arg0: Map$Entry<string, Tag>[]): CustomModelData1_21_4;
    // private customModelDataToTag(arg0: CustomModelData1_21_4): Map$Entry<string, Tag>[];
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}