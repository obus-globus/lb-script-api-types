import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { Protocol1_21_9To1_21_7 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_9to1_21_7/Protocol1_21_9To1_21_7.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_21_9 extends BackwardsStructuredItemRewriter<ClientboundPacket1_21_9, ServerboundPacket1_21_6, Protocol1_21_9To1_21_7> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21_9To1_21_7)
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    registerPackets(): void;
    restoreBackupData(arg0: Item): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    // private updateBorderCenter(arg0: PacketWrapper): void;
}