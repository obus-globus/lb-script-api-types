import type { LegacyBlockItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyBlockItemRewriter.d.ts'
import type { LegacyEnchantmentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEnchantmentRewriter.d.ts'
import type { Protocol1_11To1_10 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_11to1_10/Protocol1_11To1_10.d.ts'
import type { ChestedHorseStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_11to1_10/storage/ChestedHorseStorage.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
export class BlockItemPacketRewriter1_11 extends LegacyBlockItemRewriter<ClientboundPackets1_9_3, ServerboundPackets1_9_3, Protocol1_11To1_10> {
    constructor(arg0: Protocol1_11To1_10)
    // private enchantmentRewriter: LegacyEnchantmentRewriter;
    // private getChestedHorse(arg0: UserConnection): Optional<ChestedHorseStorage>;
    // private getNewItem(arg0: ChestedHorseStorage, arg1: number, arg2: Item): Item;
    // private getNewSlotId(arg0: ChestedHorseStorage, arg1: number): number;
    // private getOldSlotId(arg0: ChestedHorseStorage, arg1: number): number;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    // private isLlama(arg0: UserConnection): boolean;
    registerPackets(): void;
    registerRewrites(): void;
}