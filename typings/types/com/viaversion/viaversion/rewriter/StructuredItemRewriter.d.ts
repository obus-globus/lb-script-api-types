import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ItemHasher } from '../../../../com/viaversion/viaversion/api/data/item/ItemHasher.d.ts'
import type { Holder } from '../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { StructuredData } from '../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataContainer } from '../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { StructuredDataKey } from '../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { HashedItem } from '../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Item } from '../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { VersionedTypesHolder } from '../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ItemHasherBase } from '../../../../com/viaversion/viaversion/data/item/ItemHasherBase.d.ts'
import type { OriginalHashedItem } from '../../../../com/viaversion/viaversion/data/item/OriginalHashedItem.d.ts'
import type { ItemRewriter } from '../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
import type { StructuredItemRewriter$ItemHandler } from '../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter$ItemHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class StructuredItemRewriter<C extends ClientboundPacketType, S extends ServerboundPacketType, T extends Protocol<C, any, any, S>> extends ItemRewriter<C, S, T> {
    static MARKER_KEY: string;
    constructor(arg0: T)
    backedUpOriginalHashes(arg0: Map$Entry<string, Tag>[], arg1: Item): OriginalHashedItem;
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    createCustomTag(arg0: Item): Map$Entry<string, Tag>[];
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    // private handleRewritables(arg0: UserConnection, arg1: boolean, arg2: StructuredDataContainer, arg3: (param0: UserConnection, param1: Item) => Item): void;
    handleRewritablesToClient(arg0: UserConnection, arg1: StructuredDataContainer, arg2: ItemHasher): void;
    handleRewritablesToServer(arg0: UserConnection, arg1: StructuredDataContainer): void;
    hashItemIfNeeded(arg0: UserConnection, arg1: Item, arg2: ItemHasherBase): HashedItem;
    // private isFirstServerbound(arg0: UserConnection): boolean;
    // private normalizeHashedItemToServer(arg0: HashedItem): void;
    passthroughLengthPrefixedItem(arg0: PacketWrapper): void;
    registerSetCreativeModeSlot1_21_5(arg0: S): void;
    registerShowDialog(arg0: C): void;
    registerShowDialogDirect(arg0: C): void;
    removeBackupTag(arg0: Map$Entry<string, Tag>[], arg1: string): Tag;
    removeCustomTag(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[]): void;
    // private replaceAnnoyingKeys(arg0: StructuredDataContainer, arg1: VersionedTypesHolder, arg2: VersionedTypesHolder): void;
    restoreBackupData(arg0: Item): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    saveTag(arg0: Map$Entry<string, Tag>[], arg1: Tag, arg2: string): void;
    // private setDataUnchecked<V extends Object | number | string | boolean>(arg0: StructuredData<V>, arg1: Object): void;
    storeOriginalHashedItem(arg0: UserConnection, arg1: Item, arg2: ItemHasherBase, arg3: HashedItem): void;
    // private updateHolderUnchecked<V extends Object | number | string | boolean>(arg0: Holder<V>, arg1: UserConnection, arg2: boolean): Holder<V>;
    updateItemDataComponentTypeIds(arg0: StructuredDataContainer, arg1: boolean): void;
    updateTextComponent(arg0: UserConnection, arg1: Item, arg2: StructuredDataKey<Tag>, arg3: string): void;
}