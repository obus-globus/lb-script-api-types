import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Protocol25w14craftmineTo1_21_5 } from '../../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/Protocol25w14craftmineTo1_21_5.d.ts'
import type { ClientboundPacket25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ClientboundPacket25w14craftmine.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPacket1_21_5.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter25w14craftmine extends BackwardsStructuredItemRewriter<ClientboundPacket25w14craftmine, ServerboundPacket1_21_5, Protocol25w14craftmineTo1_21_5> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol25w14craftmineTo1_21_5)
    // private addMapMakingContainerSlot(arg0: number): number;
    // private addMapMakingContainerSlots(arg0: PacketWrapper): void;
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    registerPackets(): void;
    // private removeMapMakingContainerSlot(arg0: number): number;
    // private removeMapMakingContainerSlots(arg0: PacketWrapper): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    // private rewriteWorldModifiers(arg0: UserConnection, arg1: StructuredDataContainer): void;
}