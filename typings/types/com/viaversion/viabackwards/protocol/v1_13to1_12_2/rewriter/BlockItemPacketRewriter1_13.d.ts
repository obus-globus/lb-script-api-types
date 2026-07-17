import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_13To1_12_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/Protocol1_13To1_12_2.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_12_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ServerboundPackets1_12_1.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_13 extends BackwardsItemRewriter<ClientboundPackets1_13, ServerboundPackets1_12_1, Protocol1_13To1_12_2> {
    static isDamageable(paramarg0: number): boolean;
    constructor(arg0: Protocol1_13To1_12_2)
    // private enchantmentMappings: JavaMap<string, string>;
    // private extraNbtTag: string;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    // private invertShieldAndBannerId(arg0: Item, arg1: Map$Entry<string, Tag>[]): void;
    // private itemIdToRaw(arg0: number, arg1: Item, arg2: Map$Entry<string, Tag>[]): number;
    registerPackets(): void;
    registerRewrites(): void;
    // private rewriteCanPlaceToClient(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private rewriteCanPlaceToServer(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private rewriteEnchantmentsToClient(arg0: Map$Entry<string, Tag>[], arg1: boolean): void;
    // private rewriteEnchantmentsToServer(arg0: Map$Entry<string, Tag>[], arg1: boolean): void;
}