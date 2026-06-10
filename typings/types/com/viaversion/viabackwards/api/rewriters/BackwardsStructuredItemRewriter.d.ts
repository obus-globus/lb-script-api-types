import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { MappedItem } from '../../../../../com/viaversion/viabackwards/api/data/MappedItem.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EitherHolder } from '../../../../../com/viaversion/viaversion/api/minecraft/EitherHolder.d.ts'
import type { Holder } from '../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { HolderSet } from '../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { SoundEvent } from '../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { StructuredDataContainer } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { StructuredDataKey } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { StructuredItemRewriter } from '../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BackwardsStructuredItemRewriter<C extends ClientboundPacketType, S extends ServerboundPacketType, T extends BackwardsProtocol<C, Object, Object, S>> extends StructuredItemRewriter<C, S, T> {
    static MARKER_KEY: string;
    constructor(arg0: T)
    // private nbtTagName: string;
    // private addCustomModelData(arg0: Item, arg1: boolean, arg2: MappedItem, arg3: Map$Entry<string, Tag>[]): void;
    backupInconvertibleData(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer, arg3: Map$Entry<string, Tag>[]): void;
    eitherHolderToTag<V extends Object | number | string | boolean>(arg0: EitherHolder<V>, arg1: (param0: V, param1: Map$Entry<string, Tag>[]) => void): Tag;
    holderSetToTag(arg0: HolderSet): Tag;
    holderToTag<V extends Object | number | string | boolean>(arg0: Holder<V>, arg1: (param0: V, param1: Map$Entry<string, Tag>[]) => void): Tag;
    nbtTagName(): string;
    nbtTagName(arg0: string): string;
    removeGenericTagList(arg0: Map$Entry<string, Tag>[], arg1: string): Tag[];
    removeListTag(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: Class<T>): T[];
    restoreBackupData(arg0: Item): void;
    restoreBackupData(arg0: Item, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    restoreEitherHolder<V extends Object | number | string | boolean>(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: (param0: Map$Entry<string, Tag>[]) => V): EitherHolder<V>;
    restoreFloatData(arg0: StructuredDataKey<number>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    restoreHolder<V extends Object | number | string | boolean>(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: (param0: Map$Entry<string, Tag>[]) => V): Holder<V>;
    restoreHolderData<V extends Object | number | string | boolean>(arg0: StructuredDataKey<Holder<V>>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[], arg3: (param0: Map$Entry<string, Tag>[]) => V): void;
    restoreHolderSet(arg0: Map$Entry<string, Tag>[], arg1: string): HolderSet;
    restoreIntData(arg0: StructuredDataKey<number>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    restoreKeyData(arg0: StructuredDataKey<Key>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    restoreSoundEventHolder(arg0: Map$Entry<string, Tag>[]): Holder<SoundEvent>;
    restoreSoundEventHolder(arg0: Map$Entry<string, Tag>[], arg1: string): Holder<SoundEvent>;
    restoreStringData(arg0: StructuredDataKey<string>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    saveEitherHolderData<V extends Object | number | string | boolean>(arg0: StructuredDataKey<EitherHolder<V>>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[], arg3: (param0: V, param1: Map$Entry<string, Tag>[]) => void): void;
    saveFloatData(arg0: StructuredDataKey<number>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    saveGenericTagList(arg0: Map$Entry<string, Tag>[], arg1: Tag[], arg2: string): void;
    saveHolderData<V extends Object | number | string | boolean>(arg0: StructuredDataKey<Holder<V>>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[], arg3: (param0: V, param1: Map$Entry<string, Tag>[]) => void): void;
    saveIntData(arg0: StructuredDataKey<number>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    saveKeyData(arg0: StructuredDataKey<Key>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    saveListTag(arg0: Map$Entry<string, Tag>[], arg1: Tag[], arg2: string): void;
    saveSoundEvent(arg0: SoundEvent, arg1: Map$Entry<string, Tag>[]): void;
    saveSoundEventHolder(arg0: Map$Entry<string, Tag>[], arg1: Holder<SoundEvent>): void;
    saveStringData(arg0: StructuredDataKey<string>, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
}