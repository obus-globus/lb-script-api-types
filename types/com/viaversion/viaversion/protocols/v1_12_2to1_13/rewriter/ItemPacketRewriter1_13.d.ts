import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol1_12_2To1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/Protocol1_12_2To1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { ClientboundPackets1_12_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ClientboundPackets1_12_1.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_13 extends ItemRewriter<ClientboundPackets1_12_1, ServerboundPackets1_13, Protocol1_12_2To1_13> {
    static getNewPluginChannelId(paramarg0: string): string;
    static getOldPluginChannelId(paramarg0: string): string;
    static isDamageable(paramarg0: number): boolean;
    constructor(arg0: Protocol1_12_2To1_13)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}