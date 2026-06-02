import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { Protocol1_21_11To1_21_9 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_11to1_21_9/Protocol1_21_11To1_21_9.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { KineticWeapon$Condition } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/KineticWeapon$Condition.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { ClientboundPacket1_21_11 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/packet/ClientboundPacket1_21_11.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_21_11 extends BackwardsStructuredItemRewriter<ClientboundPacket1_21_11, ServerboundPacket1_21_9, Protocol1_21_11To1_21_9> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21_11To1_21_9)
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    // private loadDamageCondition(arg0: Map$Entry<string, Tag>[], arg1: string): KineticWeapon$Condition;
    registerPackets(): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    // private saveDamageCondition(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: KineticWeapon$Condition): void;
}