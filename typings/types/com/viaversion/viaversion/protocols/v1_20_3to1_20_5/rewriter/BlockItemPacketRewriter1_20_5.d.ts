import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { GameProfile$Property } from '../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile$Property.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { AdventureModePredicate } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AdventureModePredicate.d.ts'
import type { BlockPredicate } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlockPredicate.d.ts'
import type { Enchantments } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Enchantments.d.ts'
import type { FireworkExplosion } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FireworkExplosion.d.ts'
import type { PotionEffectData } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffectData.d.ts'
import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { Protocol1_20_3To1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/Protocol1_20_3To1_20_5.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { StructuredDataConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/StructuredDataConverter.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_20_5 extends ItemRewriter<ClientboundPacket1_20_3, ServerboundPacket1_20_5, Protocol1_20_3To1_20_5> {
    static ATTRIBUTE_OPERATIONS: string[];
    static MOB_TAGS: string[];
    constructor(arg0: Protocol1_20_3To1_20_5)
    // private viaFabricPlus$armorMaxDamage_b1_8_1: JavaMap<Object | null, Object | null>;
    // private viaFabricPlus$foodItems_b1_7_3: (Object | null)[];
    // private viaFabricPlus$toolDataChanges: JavaMap<Object | null, Object | null>;
    // private addBlockEntityId(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private appendItemDataFixComponents(arg0: UserConnection, arg1: Item): void;
    // private deserializeBlockPredicate(arg0: UserConnection, arg1: string): BlockPredicate;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    handleNonEmptyItemToClient(arg0: UserConnection, arg1: Item): Item;
    // private isUnknownBlockEntity(arg0: number): boolean;
    // private isValidName(arg0: string): boolean;
    // private itemFromTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): Item;
    // private jsonToTag(arg0: UserConnection, arg1: StringTag): Tag;
    // private limit(arg0: string, arg1: number): string;
    // private readExplosion(arg0: Map$Entry<string, Tag>[]): FireworkExplosion;
    // private readPotionEffectData(arg0: Map$Entry<string, Tag>[]): PotionEffectData;
    registerPackets(): void;
    // private removeEmptyItem(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private restoreBannerPatternsFromBackup(arg0: Map$Entry<string, Tag>[][], arg1: StructuredDataContainer): void;
    // private restoreFoodFromBackup(arg0: Map$Entry<string, Tag>[], arg1: StructuredDataContainer): void;
    // private restoreFromBackupTag(arg0: Map$Entry<string, Tag>[], arg1: StructuredDataContainer): void;
    // private restoreInstrumentFromBackup(arg0: Map$Entry<string, Tag>[], arg1: StructuredDataContainer): void;
    // private restoreToolFromBackup(arg0: Map$Entry<string, Tag>[], arg1: StructuredDataContainer): void;
    // private toMappedItemId(arg0: string): number;
    toOldItem(arg0: UserConnection, arg1: Item, arg2: StructuredDataConverter): Item;
    toStructuredItem(arg0: UserConnection, arg1: Item): Item;
    // private unmappedItemId(arg0: string): number;
    // private updateArmorTrim(arg0: UserConnection, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[], arg3: boolean): void;
    // private updateAttributes(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[][], arg2: boolean): void;
    // private updateBees(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[][]): void;
    // private updateBlockEntityTag(arg0: UserConnection, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    // private updateBlockPredicates(arg0: UserConnection, arg1: StringTag[], arg2: boolean): AdventureModePredicate;
    // private updateBlockState(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[]): void;
    // private updateDisplay(arg0: UserConnection, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[], arg3: number): void;
    // private updateEffects(arg0: Map$Entry<string, Tag>[][], arg1: StructuredDataContainer): void;
    // private updateEnchantments(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[], arg2: string, arg3: StructuredDataKey<Enchantments>, arg4: boolean): void;
    // private updateFireworks(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[][]): void;
    // private updateItemList(arg0: UserConnection, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[], arg3: string, arg4: StructuredDataKey<Item[]>): void;
    // private updateLodestoneTracker(arg0: boolean, arg1: Map$Entry<string, Tag>[], arg2: string, arg3: StructuredDataContainer): void;
    // private updateMapDecorations(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[][]): void;
    // private updateMobTags(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[]): void;
    // private updatePotionTags(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[]): void;
    // private updateProfile(arg0: StructuredDataContainer, arg1: Tag): void;
    // private updateProperties(arg0: Map$Entry<string, Tag>[], arg1: GameProfile$Property[]): void;
    // private updateSkullOwnerTag(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[]): void;
    // private updateWritableBookPages(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[]): void;
    // private updateWrittenBookPages(arg0: UserConnection, arg1: StructuredDataContainer, arg2: Map$Entry<string, Tag>[]): void;
    // private viaFabricPlus$blockJsonArrayToIds(arg0: ProtocolVersion, arg1: JsonElement[]): number[];
}