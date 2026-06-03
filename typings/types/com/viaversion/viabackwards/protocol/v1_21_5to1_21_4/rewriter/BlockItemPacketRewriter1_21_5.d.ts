import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { Protocol1_21_5To1_21_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_5to1_21_4/Protocol1_21_5To1_21_4.d.ts'
import type { HashedItemConverterStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_5to1_21_4/storage/HashedItemConverterStorage.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { TrackedEntity } from '../../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { SoundEvent } from '../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { OriginalHashedItem } from '../../../../../../com/viaversion/viaversion/data/item/OriginalHashedItem.d.ts'
import type { ServerboundPacket1_21_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/packet/ServerboundPacket1_21_4.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_21_5 extends BackwardsStructuredItemRewriter<ClientboundPacket1_21_5, ServerboundPacket1_21_4, Protocol1_21_5To1_21_4> {
    static MARKER_KEY: string;
    constructor(arg0: Protocol1_21_5To1_21_4)
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    // private convertClientAsset(arg0: PacketWrapper): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    // private heightmapType(arg0: number): string;
    // private itemToHashedItem(arg0: PacketWrapper, arg1: HashedItemConverterStorage): void;
    // private originalHashedItemFromBackup(arg0: Item): OriginalHashedItem;
    registerPackets(): void;
    restoreBackupData(arg0: Item): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    // private sendSaddledEntityData(arg0: UserConnection, arg1: TrackedEntity, arg2: number, arg3: boolean): void;
    // private tagToSound(arg0: Map$Entry<string, Tag>[]): SoundEvent;
}