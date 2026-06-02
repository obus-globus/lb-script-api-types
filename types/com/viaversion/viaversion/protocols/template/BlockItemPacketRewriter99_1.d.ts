import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol98_1To99_1 } from '../../../../../com/viaversion/viaversion/protocols/template/Protocol98_1To99_1.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { StructuredItemRewriter } from '../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter99_1 extends StructuredItemRewriter<ClientboundPacket26_1, ServerboundPacket1_21_9, Protocol98_1To99_1> {
    static MARKER_KEY: string;
    static downgradeData(paramarg0: StructuredDataContainer): void;
    static upgradeData(paramarg0: StructuredDataContainer): void;
    constructor(arg0: Protocol98_1To99_1)
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    registerPackets(): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
}