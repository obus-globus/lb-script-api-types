import type { ByteTag } from '../../../../../../com/viaversion/nbt/tag/ByteTag.d.ts'
import type { FloatTag } from '../../../../../../com/viaversion/nbt/tag/FloatTag.d.ts'
import type { IntTag } from '../../../../../../com/viaversion/nbt/tag/IntTag.d.ts'
import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { GameProfile } from '../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { GameProfile$Property } from '../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile$Property.d.ts'
import type { GlobalBlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/GlobalBlockPosition.d.ts'
import type { Holder } from '../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { HolderSet } from '../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { StructuredData } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { AdventureModePredicate } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AdventureModePredicate.d.ts'
import type { ArmorTrim } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ArmorTrim.d.ts'
import type { AttributeModifiers1_20_5 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AttributeModifiers1_20_5.d.ts'
import type { AttributeModifiers1_20_5$ModifierData } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AttributeModifiers1_20_5$ModifierData.d.ts'
import type { BannerPattern } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BannerPattern.d.ts'
import type { BannerPatternLayer } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BannerPatternLayer.d.ts'
import type { Bee } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Bee.d.ts'
import type { BlockPredicate } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlockPredicate.d.ts'
import type { BlockStateProperties } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlockStateProperties.d.ts'
import type { DebugStickState } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/DebugStickState.d.ts'
import type { DyedColor } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/DyedColor.d.ts'
import type { Enchantments } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Enchantments.d.ts'
import type { FilterableComponent } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FilterableComponent.d.ts'
import type { FilterableString } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FilterableString.d.ts'
import type { FireworkExplosion } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FireworkExplosion.d.ts'
import type { Fireworks } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Fireworks.d.ts'
import type { FoodProperties1_20_5 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FoodProperties1_20_5.d.ts'
import type { Instrument1_20_5 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Instrument1_20_5.d.ts'
import type { LodestoneTracker } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/LodestoneTracker.d.ts'
import type { PotDecorations } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotDecorations.d.ts'
import type { PotionContents } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionContents.d.ts'
import type { PotionEffect } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffect.d.ts'
import type { PotionEffectData } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffectData.d.ts'
import type { StatePropertyMatcher } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/StatePropertyMatcher.d.ts'
import type { SuspiciousStewEffect } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/SuspiciousStewEffect.d.ts'
import type { ToolProperties } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ToolProperties.d.ts'
import type { Unbreakable } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Unbreakable.d.ts'
import type { WritableBook } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/WritableBook.d.ts'
import type { WrittenBook } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/WrittenBook.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { StructuredDataType } from '../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataType.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ComponentRewriter1_20_5$ConverterPair } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$ConverterPair.d.ts'
import type { ComponentRewriter1_20_5$DataConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$DataConverter.d.ts'
import type { ComponentRewriter1_20_5$SimpleDataConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$SimpleDataConverter.d.ts'
import type { ComponentRewriter1_20_5$SimpleTagConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$SimpleTagConverter.d.ts'
import type { ComponentRewriter1_20_5$TagConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$TagConverter.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { Key } from '../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { SerializerVersion } from '../../../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Unit } from '../../../../../../com/viaversion/viaversion/util/Unit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_20_5<C extends ClientboundPacketType> extends JsonNBTComponentRewriter<C> {
    constructor(arg0: Protocol<C, any, any, any>, arg1: StructuredDataType)
    // private converters: Map<StructuredDataKey<Object>, ComponentRewriter1_20_5$ConverterPair<Object>>;
    // private structuredDataType: StructuredDataType;
    asBoolean(arg0: Tag): boolean;
    asInt(arg0: Tag): number;
    asUnsignedByte(arg0: Tag): number;
    attributeModifiersFromTag(arg0: Tag): AttributeModifiers1_20_5;
    attributeModifiersToTag(arg0: AttributeModifiers1_20_5): Map$Entry<string, Tag>[];
    bannerPatternFromTag(arg0: Tag): Holder<BannerPattern>;
    bannerPatternToTag(arg0: Map$Entry<string, Tag>[], arg1: Holder<BannerPattern>): void;
    bannerPatternsFromTag(arg0: Tag): BannerPatternLayer[];
    bannerPatternsToTag(arg0: BannerPatternLayer[]): Map$Entry<string, Tag>[][];
    baseColorFromTag(arg0: Tag): number;
    baseColorToTag(arg0: number): StringTag;
    beesFromTag(arg0: Tag): Bee[];
    beesToTag(arg0: Bee[]): Map$Entry<string, Tag>[][];
    blockEntityDataFromTag(arg0: Tag): Map$Entry<string, Tag>[];
    blockEntityDataToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    blockPredicateFromTag(arg0: Tag): AdventureModePredicate;
    blockPredicateToTag(arg0: AdventureModePredicate): Map$Entry<string, Tag>[];
    blockStateFromTag(arg0: Tag): BlockStateProperties;
    blockStateToTag(arg0: BlockStateProperties): Map$Entry<string, Tag>[];
    bucketEntityDataFromTag(arg0: Tag): Map$Entry<string, Tag>[];
    bucketEntityDataToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    bundleContentsFromTag(arg0: UserConnection, arg1: Tag): Item[];
    bundleContentsToTag(arg0: UserConnection, arg1: Item[]): Map$Entry<string, Tag>[][];
    canBreakFromTag(arg0: Tag): AdventureModePredicate;
    canBreakToTag(arg0: AdventureModePredicate): Map$Entry<string, Tag>[];
    canPlaceOnFromTag(arg0: Tag): AdventureModePredicate;
    canPlaceOnToTag(arg0: AdventureModePredicate): Map$Entry<string, Tag>[];
    chargedProjectilesFromTag(arg0: UserConnection, arg1: Tag): Item[];
    chargedProjectilesToTag(arg0: UserConnection, arg1: Item[]): Map$Entry<string, Tag>[][];
    checkFloatRange(arg0: number, arg1: number, arg2: number): number;
    checkIntRange(arg0: number, arg1: number, arg2: number): number;
    checkNonNegativeInt(arg0: number): number;
    checkPositiveFloat(arg0: number): number;
    checkPositiveInt(arg0: number): number;
    checkStringRange(arg0: number, arg1: number, arg2: string): string;
    componentFromTag(arg0: Tag): Tag;
    componentFromTag(arg0: Tag, arg1: number): Tag;
    componentToTag(arg0: Tag): StringTag;
    componentToTag(arg0: Tag, arg1: number): StringTag;
    componentsFromTag(arg0: Tag, arg1: number): Tag[];
    componentsToTag(arg0: Tag[], arg1: number): StringTag[];
    containerFromTag(arg0: UserConnection, arg1: Tag): Item[];
    containerLootFromTag(arg0: Tag): Map$Entry<string, Tag>[];
    containerLootToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    containerToTag(arg0: UserConnection, arg1: Item[]): Map$Entry<string, Tag>[][];
    createState(arg0: BlockPredicate): Map$Entry<string, Tag>[];
    customDataFromTag(arg0: Tag): Map$Entry<string, Tag>[];
    customDataToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    customModelDataFromTag(arg0: Tag): number;
    customModelDataToTag(arg0: number): IntTag;
    customNameFromTag(arg0: Tag): Tag;
    customNameToTag(arg0: Tag): StringTag;
    damageFromTag(arg0: Tag): number;
    damageToTag(arg0: number): IntTag;
    dataConverter<T extends unknown>(arg0: StructuredDataKey<T>): (param0: UserConnection, param1: T) => Tag;
    debugStickStateFromTag(arg0: Tag): DebugStickState;
    debugStickStateToTag(arg0: DebugStickState): Map$Entry<string, Tag>[];
    dyeColorFromTag(arg0: Tag): number;
    dyeColorToTag(arg0: number): StringTag;
    dyedColorFromTag(arg0: Tag): DyedColor;
    dyedColorToTag(arg0: DyedColor): Map$Entry<string, Tag>[];
    enchantmentGlintOverrideFromTag(arg0: Tag): boolean;
    enchantmentGlintOverrideToTag(arg0: boolean): ByteTag;
    enchantmentsFromTag(arg0: Tag): Enchantments;
    enchantmentsToTag(arg0: Enchantments): Map$Entry<string, Tag>[];
    entityDataFromTag(arg0: Tag): Map$Entry<string, Tag>[];
    entityDataToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    enumEntryFromTag(arg0: StringTag, arg1: string[]): number;
    enumEntryToTag(arg0: number, arg1: string[]): StringTag;
    filterableComponentFromTag(arg0: Map$Entry<string, Tag>[]): FilterableComponent;
    filterableComponentToTag(arg0: Map$Entry<string, Tag>[], arg1: FilterableComponent): void;
    filterableStringFromTag(arg0: Map$Entry<string, Tag>[]): FilterableString;
    filterableStringToTag(arg0: Map$Entry<string, Tag>[], arg1: FilterableString, arg2: number): void;
    fireResistantFromTag(arg0: Tag): Unit;
    fireResistantToTag(arg0: Unit): Map$Entry<string, Tag>[];
    fireworkExplosionFromTag(arg0: Tag): FireworkExplosion;
    fireworkExplosionToTag(arg0: FireworkExplosion): Map$Entry<string, Tag>[];
    fireworksFromTag(arg0: Tag): Fireworks;
    fireworksToTag(arg0: Fireworks): Map$Entry<string, Tag>[];
    floatRangeToTag(arg0: number, arg1: number, arg2: number): FloatTag;
    foodFromTag(arg0: Tag): FoodProperties1_20_5;
    foodToTag(arg0: FoodProperties1_20_5): Map$Entry<string, Tag>[];
    fromState(arg0: Map$Entry<string, Tag>[]): StatePropertyMatcher[];
    globalPosFromTag(arg0: Map$Entry<string, Tag>[]): GlobalBlockPosition;
    globalPosToTag(arg0: Map$Entry<string, Tag>[], arg1: GlobalBlockPosition): void;
    handleHoverEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: JsonObject): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    hideAdditionalTooltipFromTag(arg0: Tag): Unit;
    hideAdditionalTooltipToTag(arg0: Unit): Map$Entry<string, Tag>[];
    hideTooltipFromTag(arg0: Tag): Unit;
    hideTooltipToTag(arg0: Unit): Map$Entry<string, Tag>[];
    holderSetFromTag(arg0: Map$Entry<string, Tag>[], arg1: string): HolderSet;
    holderSetToTag(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: HolderSet): void;
    identifierFromTag(arg0: StringTag): string;
    identifierToTag(arg0: string): StringTag;
    inputSerializerVersion(): SerializerVersion;
    instrumentFromTag(arg0: Tag): Holder<Instrument1_20_5>;
    instrumentToTag(arg0: Holder<Instrument1_20_5>): Tag;
    intRangeToTag(arg0: number, arg1: number, arg2: number): IntTag;
    intangibleProjectileFromTag(arg0: Tag): Tag;
    intangibleProjectileToTag(arg0: Tag): Map$Entry<string, Tag>[];
    itemArrayFromTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[][]): Item[];
    itemArrayToTag(arg0: UserConnection, arg1: Item[]): Map$Entry<string, Tag>[][];
    itemFromTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): Item;
    itemNameFromTag(arg0: Tag): Tag;
    itemNameToTag(arg0: Tag): StringTag;
    itemToTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Item): void;
    lockFromTag(arg0: Tag): Tag;
    lockToTag(arg0: Tag): StringTag;
    lodestoneTrackerFromTag(arg0: Tag): LodestoneTracker;
    lodestoneTrackerToTag(arg0: LodestoneTracker): Map$Entry<string, Tag>[];
    loreFromTag(arg0: Tag): Tag[];
    loreToTag(arg0: Tag[]): StringTag[];
    mapColorFromTag(arg0: Tag): number;
    mapColorToTag(arg0: number): IntTag;
    mapDecorationsFromTag(arg0: Tag): Map$Entry<string, Tag>[];
    mapDecorationsToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    mapIdFromTag(arg0: Tag): number;
    mapIdToTag(arg0: number): IntTag;
    // private mappedId(arg0: string): number;
    // private mappedIdentifier(arg0: number): string;
    maxDamageFromTag(arg0: Tag): number;
    maxDamageToTag(arg0: number): IntTag;
    maxStackSizeFromTag(arg0: Tag): number;
    maxStackSizeToTag(arg0: number): IntTag;
    modifierDataFromTag(arg0: Map$Entry<string, Tag>[]): AttributeModifiers1_20_5$ModifierData;
    modifierDataToTag(arg0: Map$Entry<string, Tag>[], arg1: AttributeModifiers1_20_5$ModifierData): void;
    nbtToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    nbtWithIdToTag(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    nonNegativeIntToTag(arg0: number): IntTag;
    noteBlockSoundFromTag(arg0: Tag): Key;
    noteBlockSoundToTag(arg0: Key): StringTag;
    ominousBottleAmplifierFromTag(arg0: Tag): number;
    ominousBottleAmplifierToTag(arg0: number): IntTag;
    outputSerializerVersion(): SerializerVersion;
    positiveFloatToTag(arg0: number): FloatTag;
    positiveIntToTag(arg0: number): IntTag;
    potDecorationsFromTag(arg0: Tag): PotDecorations;
    potDecorationsToTag(arg0: PotDecorations): StringTag[];
    potionContentsFromTag(arg0: Tag): PotionContents;
    potionContentsToTag(arg0: PotionContents): Map$Entry<string, Tag>[];
    potionEffectDataFromTag(arg0: Map$Entry<string, Tag>[]): PotionEffectData;
    potionEffectDataToTag(arg0: Map$Entry<string, Tag>[], arg1: PotionEffectData): void;
    potionEffectFromTag(arg0: Map$Entry<string, Tag>[]): PotionEffect;
    potionEffectToTag(arg0: Map$Entry<string, Tag>[], arg1: PotionEffect): void;
    profileFromTag(arg0: Tag): GameProfile;
    profileToTag(arg0: GameProfile): Map$Entry<string, Tag>[];
    propertiesFromTag(arg0: Map$Entry<string, Tag>[]): GameProfile$Property[];
    propertiesToTag(arg0: Map$Entry<string, Tag>[], arg1: GameProfile$Property[]): void;
    rarityFromTag(arg0: Tag): number;
    rarityToTag(arg0: number): StringTag;
    readFromTag<T extends unknown>(arg0: UserConnection, arg1: StructuredDataKey<T>, arg2: number, arg3: Tag): StructuredData<T>;
    // private readFromTag(arg0: UserConnection, arg1: string, arg2: Tag): StructuredData<Object>;
    recipesFromTag(arg0: Tag): Tag;
    recipesToTag(arg0: Tag): Tag;
    register<T extends unknown>(arg0: StructuredDataKey<T>, arg1: (param0: UserConnection, param1: T) => Tag, arg2: (param0: UserConnection, param1: Tag) => T): void;
    register<T extends unknown>(arg0: StructuredDataKey<T>, arg1: (param0: T) => Tag, arg2: (param0: Tag) => T): void;
    registerEmpty<T extends unknown>(arg0: StructuredDataKey<T>): void;
    repairCostFromTag(arg0: Tag): number;
    repairCostToTag(arg0: number): IntTag;
    storedEnchantmentsFromTag(arg0: Tag): Enchantments;
    storedEnchantmentsToTag(arg0: Enchantments): Map$Entry<string, Tag>[];
    stringToTag(arg0: string, arg1: number, arg2: number): StringTag;
    suspiciousStewEffectsFromTag(arg0: Tag): SuspiciousStewEffect[];
    suspiciousStewEffectsToTag(arg0: SuspiciousStewEffect[]): Map$Entry<string, Tag>[][];
    tagConverter<T extends unknown>(arg0: StructuredDataKey<T>): (param0: UserConnection, param1: Tag) => T;
    toData(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): StructuredData<Object>[];
    toTag(arg0: UserConnection, arg1: Map<StructuredDataKey<Object>, StructuredData<Object>>): Map$Entry<string, Tag>[];
    toolFromTag(arg0: Tag): ToolProperties;
    toolToTag(arg0: ToolProperties): Map$Entry<string, Tag>[];
    trimFromTag(arg0: UserConnection, arg1: Tag): ArmorTrim;
    trimToTag(arg0: UserConnection, arg1: ArmorTrim): Map$Entry<string, Tag>[];
    unbreakableFromTag(arg0: Tag): Unbreakable;
    unbreakableToTag(arg0: Unbreakable): Map$Entry<string, Tag>[];
    unitToTag(): Map$Entry<string, Tag>[];
    unsignedByteToTag(arg0: number): ByteTag;
    writableBookContentFromTag(arg0: Tag): WritableBook;
    writableBookContentToTag(arg0: WritableBook): Map$Entry<string, Tag>[];
    writtenBookContentFromTag(arg0: Tag): WrittenBook;
    writtenBookContentToTag(arg0: WrittenBook): Map$Entry<string, Tag>[];
}