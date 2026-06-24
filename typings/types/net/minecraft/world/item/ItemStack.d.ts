import type { LocalIntRef } from '../../../../com/llamalad7/mixinextras/sugar/ref/LocalIntRef.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChangePublisher } from '../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangePublisher.d.ts'
import type { ChangeSubscriber } from '../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber.d.ts'
import type { EnchantingContext } from '../../../../net/fabricmc/fabric/api/item/v1/EnchantingContext.d.ts'
import type { FabricItemStack } from '../../../../net/fabricmc/fabric/api/item/v1/FabricItemStack.d.ts'
import type { ItemStackAccessor } from '../../../../net/fabricmc/fabric/mixin/transfer/ItemStackAccessor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentHolder } from '../../../../net/minecraft/core/component/DataComponentHolder.d.ts'
import type { DataComponentPatch } from '../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { SlotAccess } from '../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { ClickAction } from '../../../../net/minecraft/world/inventory/ClickAction.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { TooltipComponent } from '../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$TooltipContext } from '../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { ItemUseAnimation } from '../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
import type { Rarity } from '../../../../net/minecraft/world/item/Rarity.d.ts'
import type { TooltipFlag } from '../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { ItemAttributeModifiers$Display } from '../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Display.d.ts'
import type { SwingAnimation } from '../../../../net/minecraft/world/item/component/SwingAnimation.d.ts'
import type { TooltipDisplay } from '../../../../net/minecraft/world/item/component/TooltipDisplay.d.ts'
import type { TooltipProvider } from '../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { UseOnContext } from '../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { Enchantment } from '../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { ItemEnchantments } from '../../../../net/minecraft/world/item/enchantment/ItemEnchantments.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockInWorld } from '../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { TriConsumer } from '../../../../org/apache/commons/lang3/function/TriConsumer.d.ts'
export class ItemStack extends Object implements ChangePublisher<Object>, ChangeSubscriber<Object>, FabricItemStack, ItemStackAccessor, DataComponentHolder, ItemInstance {
    static CODEC: Codec<ItemStack>;
    static EMPTY: ItemStack;
    static FIELD_COMPONENTS: string;
    static FIELD_COUNT: string;
    static FIELD_ID: string;
    static MAP_CODEC: MapCodec<ItemStack>;
    static OPTIONAL_CODEC: Codec<ItemStack>;
    static OPTIONAL_LIST_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemStack[]>;
    static OPTIONAL_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemStack>;
    static OPTIONAL_UNTRUSTED_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemStack>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemStack>;
    static combine(paramarg0: ChangeSubscriber<Object>, paramarg1: number, paramarg2: ChangeSubscriber<Object>, paramarg3: number): ChangeSubscriber<Object>;
    static containsSubscriber(paramarg0: ChangeSubscriber<ItemStack>, paramarg1: number, paramarg2: ChangeSubscriber<ItemStack>, paramarg3: number): boolean;
    static dataOf(paramarg0: ChangeSubscriber<Object>, paramarg1: ChangeSubscriber<Object>, paramarg2: number): number;
    static dataWithout(paramarg0: ChangeSubscriber<Object>, paramarg1: ChangeSubscriber<Object>, paramarg2: number): number;
    static dataWithout(paramarg0: ChangeSubscriber<Object>, paramarg1: ChangeSubscriber<Object>, paramarg2: number, paramarg3: number, paramarg4: boolean): number;
    static hashItemAndComponents(paramitem: ItemStack): number;
    static hashStackList(paramitems: ItemStack[]): number;
    static isSameItem(parama: ItemStack, paramb: ItemStack): boolean;
    static isSameItemSameComponents(parama: ItemStack, paramb: ItemStack): boolean;
    static lenientOptionalFieldOf(paramname: string): MapCodec<ItemStack>;
    static listMatches(paramleft: ItemStack[], paramright: ItemStack[]): boolean;
    static matches(parama: ItemStack, paramb: ItemStack): boolean;
    static matchesIgnoringComponents(parama: ItemStack, paramb: ItemStack, paramignoredPredicate: (param0: DataComponentType<Object>) => boolean): boolean;
    static validateComponents(paramarg0: TypedDataComponent<Object>[]): DataResult<Object>;
    static validateStrict(paramitemStack: ItemStack): DataResult<ItemStack>;
    static validatedStreamCodec(paramcodec: StreamCodec<RegistryFriendlyByteBuf, ItemStack>): StreamCodec<RegistryFriendlyByteBuf, ItemStack>;
    static without(paramarg0: ChangeSubscriber<Object>, paramarg1: ChangeSubscriber<Object>): ChangeSubscriber<Object>;
    static without(paramarg0: ChangeSubscriber<Object>, paramarg1: ChangeSubscriber<Object>, paramarg2: number, paramarg3: boolean): ChangeSubscriber<Object>;
    private constructor(nullMarker: void)
    constructor(item: Holder<Item>)
    constructor(item: Holder<Item>, count: number)
    constructor(item: Holder<Item>, count: number, components: DataComponentPatch)
    private constructor(item: Holder<Item>, count: number, components: (Object | null)[])
    constructor(item: ItemLike)
    constructor(item: ItemLike, count: number)
    readonly components: (Object | null)[];
    readonly item: Holder<Item>;
    readonly popTime: number;
    // private subscriber: ChangeSubscriber<Object>;
    // private subscriberData: number;
    // private addAttributeTooltips(consumer: (param0: Component) => void, display: TooltipDisplay, player: Player): void;
    addDetailsToTooltip(context: Item$TooltipContext, display: TooltipDisplay, player: Player, tooltipFlag: TooltipFlag, builder: (param0: Component) => void): void;
    addToTooltip<T extends TooltipProvider>(type: DataComponentType<T>, context: Item$TooltipContext, display: TooltipDisplay, consumer: (param0: Component) => void, flag: TooltipFlag): void;
    // private addUnitComponentToTooltip(dataComponentType: DataComponentType<Object>, component: Component, display: TooltipDisplay, builder: (param0: Component) => void): void;
    // private applyAfterUseComponentSideEffects(user: LivingEntity, stackBeforeUsing: ItemStack): ItemStack;
    applyComponents(components: TypedDataComponent<Object>[]): void;
    applyComponents(patch: DataComponentPatch): void;
    applyComponentsAndValidate(patch: DataComponentPatch): void;
    // private applyDamage(newDamage: number, player: ServerPlayer, onBreak: (param0: Item) => void): void;
    canBeEnchantedWith(arg0: Holder<Enchantment>, arg1: EnchantingContext): boolean;
    canBeHurtBy(source: DamageSource): boolean;
    canBreakBlockInAdventureMode(blockInWorld: BlockInWorld): boolean;
    canDestroyBlock(state: BlockState, level: Level, pos: BlockPos, player: Player): boolean;
    canPlaceOnBlockInAdventureMode(blockInWorld: BlockInWorld): boolean;
    causeUseVibration(causer: Entity, event: Holder$Reference<GameEvent>): void;
    consume(amount: number, owner: LivingEntity): void;
    consumeAndReturn(amount: number, owner: LivingEntity): ItemStack;
    copy(): ItemStack;
    copyAndClear(): ItemStack;
    copyFrom<T extends unknown>(type: DataComponentType<T>, source: DataComponentGetter): void;
    copyWithCount(count: number): ItemStack;
    count(): number;
    enchant(enchantment: Holder<Enchantment>, level: number): void;
    finishUsingItem(level: Level, livingEntity: LivingEntity): ItemStack;
    forEachModifier(slot: EquipmentSlot, consumer: (param0: Holder<Attribute>, param1: AttributeModifier) => void): void;
    forEachModifier(slot: EquipmentSlot[], consumer: (param0: Holder<Attribute>, param1: AttributeModifier, param2: ItemAttributeModifiers$Display) => void): void;
    get<T extends unknown>(type: DataComponentType<T>): T;
    getAllOfType<T extends unknown>(valueClass: Class<T>): Stream<T>;
    getBarColor(): number;
    getBarWidth(): number;
    getComponents(): TypedDataComponent<Object>[];
    getComponentsPatch(): DataComponentPatch;
    getCount(): number;
    getCraftingRemainder(): ItemStackTemplate;
    getCreatorNamespace(): string;
    getCustomName(): Component;
    getDamageSource(attacker: LivingEntity): DamageSource;
    getDamageValue(): number;
    getDestroySpeed(state: BlockState): number;
    getDisplayName(): Component;
    getEnchantments(): ItemEnchantments;
    getHoverName(): Component;
    getItem(): Item;
    getItemName(): Component;
    getMaxDamage(): number;
    getMaxStackSize(): number;
    getOrDefault<T extends unknown>(type: DataComponentType<T>, defaultValue: T): T;
    getPopTime(): number;
    getPrototype(): TypedDataComponent<Object>[];
    getRarity(): Rarity;
    getStyledHoverName(): Component;
    getSwingAnimation(): SwingAnimation;
    getTooltipImage(): Optional<TooltipComponent>;
    getTooltipLines(context: Item$TooltipContext, player: Player, tooltipFlag: TooltipFlag): Component[];
    getUseAnimation(): ItemUseAnimation;
    getUseDuration(user: LivingEntity): number;
    grow(amount: number): void;
    has(type: DataComponentType<Object>): boolean;
    hasFoil(): boolean;
    hasNonDefault(type: DataComponentType<Object>): boolean;
    hurtAndBreak(amount: number, level: ServerLevel, player: ServerPlayer, onBreak: (param0: Item) => void): void;
    hurtAndBreak(amount: number, owner: LivingEntity, hand: InteractionHand): void;
    hurtAndBreak(amount: number, owner: LivingEntity, slot: EquipmentSlot): void;
    hurtAndConvertOnBreak(amount: number, newItem: ItemLike, owner: LivingEntity, slot: EquipmentSlot): ItemStack;
    hurtEnemy(mob: LivingEntity, attacker: LivingEntity): boolean;
    hurtWithoutBreaking(amount: number, player: Player): void;
    immutableComponents(): TypedDataComponent<Object>[];
    interactLivingEntity(player: Player, target: LivingEntity, hand: InteractionHand): InteractionResult;
    inventoryTick(level: Level, owner: Entity, slot: EquipmentSlot): void;
    is(item: (param0: Holder<Item>) => boolean): boolean;
    is(type: Holder<Item>): boolean;
    is(set: Holder<Item>[]): boolean;
    is(type: ResourceKey<Item>): boolean;
    is(tag: TagKey<Item>): boolean;
    is(rawType: Item): boolean;
    isBarVisible(): boolean;
    isBroken(): boolean;
    isCorrectToolForDrops(state: BlockState): boolean;
    isDamageableItem(): boolean;
    isDamaged(): boolean;
    isEmpty(): boolean;
    isEnchantable(): boolean;
    isEnchanted(): boolean;
    isItemEnabled(enabledFeatures: FeatureFlagSet): boolean;
    isStackable(): boolean;
    isValidRepairItem(repairItem: ItemStack): boolean;
    limitSize(maxStackSize: number): void;
    lithium$forceUnsubscribe(arg0: (Object | null)[], arg1: number): void;
    lithium$isSubscribedWithData(arg0: ChangeSubscriber<ItemStack>, arg1: number): boolean;
    lithium$isSubscribedWithData(arg0: ChangeSubscriber<Object>, arg1: number): boolean;
    lithium$notify(arg0: (Object | null)[], arg1: number): void;
    lithium$subscribe(arg0: ChangeSubscriber<Object>, arg1: number): void;
    lithium$unsubscribe(arg0: ChangeSubscriber<Object>): number;
    lithium$unsubscribeWithData(arg0: ChangeSubscriber<Object>, arg1: number): void;
    mineBlock(level: Level, state: BlockState, pos: BlockPos, owner: Player): void;
    nextDamageWillBreak(): boolean;
    onCraftedBy(player: Player, craftCount: number): void;
    onCraftedBySystem(level: Level): void;
    onDestroyed(itemEntity: ItemEntity): void;
    onUseTick(level: Level, livingEntity: LivingEntity, ticksRemaining: number): void;
    overrideOtherStackedOnMe(other: ItemStack, slot: Slot, clickAction: ClickAction, player: Player, carriedItem: SlotAccess): boolean;
    overrideStackedOnOther(slot: Slot, clickAction: ClickAction, player: Player): boolean;
    postHurtEnemy(mob: LivingEntity, attacker: LivingEntity): void;
    // private preAppendTooltip(arg0: DataComponentType<Object>, arg1: Item$TooltipContext, arg2: TooltipDisplay, arg3: (param0: Object) => void, arg4: TooltipFlag, arg5: LocalIntRef): void;
    // private processDurabilityChange(amount: number, level: ServerLevel, player: ServerPlayer): number;
    releaseUsing(level: Level, entity: LivingEntity, remainingTime: number): void;
    remove<T extends unknown>(type: DataComponentType<T>): T;
    set<T extends unknown>(type: DataComponentType<T>, value: T): T;
    set<T extends unknown>(value: TypedDataComponent<T>): T;
    setCount(count: number): void;
    setDamageValue(value: number): void;
    setPopTime(popTime: number): void;
    shrink(amount: number): void;
    split(amount: number): ItemStack;
    // private startTrackingChanges(): void;
    toString(): string;
    transmuteCopy(newItem: ItemLike): ItemStack;
    transmuteCopy(newItem: ItemLike, newCount: number): ItemStack;
    // private transmuteCopyIgnoreEmpty(newItem: ItemLike, newCount: number): ItemStack;
    typeHolder(): Holder<Item>;
    update<T extends unknown, U extends unknown>(type: DataComponentType<T>, defaultValue: T, value: U, combiner: (param0: T, param1: U) => T): T;
    update<T extends unknown>(type: DataComponentType<T>, defaultValue: T, function_: (param0: T) => Object | null): T;
    use(level: Level, player: Player, hand: InteractionHand): InteractionResult;
    useOn(context: UseOnContext): InteractionResult;
    useOnRelease(): boolean;
    // private viaFabricPlus$appendEnchantments1_14_4(arg0: string, arg1: CompoundTag, arg2: Item$TooltipContext, arg3: (param0: Object) => void): void;
}