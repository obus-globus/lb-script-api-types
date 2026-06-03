import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { Protocol26_1To1_21_11 } from '../../../../../../com/viaversion/viabackwards/protocol/v26_1to1_21_11/Protocol26_1To1_21_11.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter26_1 extends BackwardsStructuredItemRewriter<ClientboundPacket26_1, ServerboundPacket1_21_9, Protocol26_1To1_21_11> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol26_1To1_21_11)
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    restoreBackupData(arg0: Item): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
}