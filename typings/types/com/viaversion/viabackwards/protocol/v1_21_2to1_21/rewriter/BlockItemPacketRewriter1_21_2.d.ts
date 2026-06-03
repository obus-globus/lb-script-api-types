import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { Protocol1_21_2To1_21 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/Protocol1_21_2To1_21.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Consumable1_21_2$ConsumeEffect } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Consumable1_21_2$ConsumeEffect.d.ts'
import type { PotionEffectData } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffectData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_21_2 extends BackwardsStructuredItemRewriter<ClientboundPacket1_21_2, ServerboundPacket1_20_5, Protocol1_21_2To1_21> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21_2To1_21)
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    // private backupInconvertibleData(arg0: Item): void;
    // private byteToVarInt(arg0: PacketWrapper): void;
    // private convertConsumableEffect(arg0: Map$Entry<string, Tag>[]): Consumable1_21_2$ConsumeEffect<Object>;
    // private convertConsumableEffect(arg0: Map$Entry<string, Tag>[], arg1: Consumable1_21_2$ConsumeEffect<Object>): void;
    // private convertPotionEffectData(arg0: Map$Entry<string, Tag>[]): PotionEffectData;
    // private convertPotionEffectData(arg0: Map$Entry<string, Tag>[], arg1: PotionEffectData): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    // private restoreInconvertibleData(arg0: Item): void;
    // private signBlockState(arg0: number): boolean;
    // private varIntToByte(arg0: PacketWrapper): void;
    // private varIntToUnsignedByte(arg0: PacketWrapper): void;
}