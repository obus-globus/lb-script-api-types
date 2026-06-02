import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomDamageHandler } from '../../../../net/fabricmc/fabric/api/item/v1/CustomDamageHandler.d.ts'
import type { EnchantingContext } from '../../../../net/fabricmc/fabric/api/item/v1/EnchantingContext.d.ts'
import type { EquipmentSlotProvider } from '../../../../net/fabricmc/fabric/api/item/v1/EquipmentSlotProvider.d.ts'
import type { FabricItem } from '../../../../net/fabricmc/fabric/api/item/v1/FabricItem.d.ts'
import type { ItemVariant } from '../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { ItemExtensions } from '../../../../net/fabricmc/fabric/impl/item/ItemExtensions.d.ts'
import type { ItemVariantCache } from '../../../../net/fabricmc/fabric/impl/transfer/item/ItemVariantCache.d.ts'
import type { IrisItemLightProvider } from '../../../../net/irisshaders/iris/api/v0/item/IrisItemLightProvider.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { SlotAccess } from '../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { ClickAction } from '../../../../net/minecraft/world/inventory/ClickAction.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { TooltipComponent } from '../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { Item$TooltipContext } from '../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { ItemUseAnimation } from '../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
import type { TooltipFlag } from '../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipDisplay } from '../../../../net/minecraft/world/item/component/TooltipDisplay.d.ts'
import type { UseOnContext } from '../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { Enchantment } from '../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class Item extends Object implements FabricItem, ItemExtensions, ItemVariantCache, IrisItemLightProvider, FeatureElement, ItemLike {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: Map<Block, Item>;
    static CODEC: Codec<Object>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Object>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static FILTERED_REGISTRIES: (Object | null)[];
    static MAX_BAR_WIDTH: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getId(paramitem: Item): number;
    constructor(properties: Item$Properties)
    // private builtInRegistryHolder: Holder$Reference<Item>;
    // private cachedItemVariant: ItemVariant;
    // private craftingRemainingItem: ItemStackTemplate;
    // private customDamageHandler: (param0: ItemStack, param1: number, param2: LivingEntity, param3: EquipmentSlot, param4: () => void) => kotlin.Int;
    readonly descriptionId: string;
    // private equipmentSlotProvider: (param0: LivingEntity, param1: ItemStack) => net.minecraft.world.entity.EquipmentSlot;
    // private requiredFeatures: FeatureFlagSet;
    allowComponentsUpdateAnimation(arg0: Player, arg1: InteractionHand, arg2: ItemStack, arg3: ItemStack): boolean;
    allowContinuingBlockBreaking(arg0: Player, arg1: ItemStack, arg2: ItemStack): boolean;
    appendHoverText(itemStack: ItemStack, context: Item$TooltipContext, display: TooltipDisplay, builder: (param0: Component) => void, tooltipFlag: TooltipFlag): void;
    asItem(): Item;
    builtInRegistryHolder(): Holder$Reference<Item>;
    canBeEnchantedWith(arg0: ItemStack, arg1: Holder<Enchantment>, arg2: EnchantingContext): boolean;
    canDestroyBlock(itemStack: ItemStack, state: BlockState, level: Level, pos: BlockPos, user: LivingEntity): boolean;
    canFitInsideContainerItems(): boolean;
    components(): TypedDataComponent<Object>[];
    fabric_getCachedItemVariant(): ItemVariant;
    fabric_getCustomDamageHandler(): (param0: ItemStack, param1: number, param2: LivingEntity, param3: EquipmentSlot, param4: () => void) => kotlin.Int;
    fabric_getEquipmentSlotProvider(): (param0: LivingEntity, param1: ItemStack) => net.minecraft.world.entity.EquipmentSlot;
    fabric_setCustomDamageHandler(arg0: (param0: ItemStack, param1: number, param2: LivingEntity, param3: EquipmentSlot, param4: () => void) => kotlin.Int): void;
    fabric_setEquipmentSlotProvider(arg0: (param0: LivingEntity, param1: ItemStack) => net.minecraft.world.entity.EquipmentSlot): void;
    finishUsingItem(itemStack: ItemStack, level: Level, entity: LivingEntity): ItemStack;
    getAttackDamageBonus(victim: Entity, damage: number, damageSource: DamageSource): number;
    getBarColor(stack: ItemStack): number;
    getBarWidth(stack: ItemStack): number;
    getCraftingRemainder(arg0: ItemStack): ItemStackTemplate;
    getCraftingRemainder(): ItemStackTemplate;
    getCreatorNamespace(arg0: ItemStack): string;
    getDefaultInstance(): ItemStack;
    getDefaultMaxStackSize(): number;
    getDescriptionId(): string;
    getDestroySpeed(itemStack: ItemStack, state: BlockState): number;
    getItemDamageSource(attacker: LivingEntity): DamageSource;
    getLightColor(arg0: Player, arg1: ItemStack): Vector3f;
    getLightEmission(arg0: Player, arg1: ItemStack): number;
    getName(itemStack: ItemStack): Component;
    getTooltipImage(itemStack: ItemStack): Optional<TooltipComponent>;
    getUseAnimation(itemStack: ItemStack): ItemUseAnimation;
    getUseDuration(itemStack: ItemStack, user: LivingEntity): number;
    hurtEnemy(itemStack: ItemStack, mob: LivingEntity, attacker: LivingEntity): void;
    interactLivingEntity(itemStack: ItemStack, player: Player, target: LivingEntity, type: InteractionHand): InteractionResult;
    inventoryTick(itemStack: ItemStack, level: ServerLevel, owner: Entity, slot: EquipmentSlot): void;
    isBarVisible(stack: ItemStack): boolean;
    isCorrectToolForDrops(itemStack: ItemStack, state: BlockState): boolean;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    isFoil(itemStack: ItemStack): boolean;
    mineBlock(itemStack: ItemStack, level: Level, state: BlockState, pos: BlockPos, owner: LivingEntity): boolean;
    onCraftedBy(itemStack: ItemStack, player: Player): void;
    onCraftedPostProcess(itemStack: ItemStack, level: Level): void;
    onDestroyed(itemEntity: ItemEntity): void;
    onUseTick(level: Level, livingEntity: LivingEntity, itemStack: ItemStack, ticksRemaining: number): void;
    overrideOtherStackedOnMe(self: ItemStack, other: ItemStack, slot: Slot, clickAction: ClickAction, player: Player, carriedItem: SlotAccess): boolean;
    overrideStackedOnOther(self: ItemStack, slot: Slot, clickAction: ClickAction, player: Player): boolean;
    postHurtEnemy(itemStack: ItemStack, mob: LivingEntity, attacker: LivingEntity): void;
    releaseUsing(itemStack: ItemStack, level: Level, entity: LivingEntity, remainingTime: number): boolean;
    requiredFeatures(): FeatureFlagSet;
    shouldPrintOpWarning(stack: ItemStack, player: Player): boolean;
    toString(): string;
    use(level: Level, player: Player, hand: InteractionHand): InteractionResult;
    useOn(context: UseOnContext): InteractionResult;
    useOnRelease(itemStack: ItemStack): boolean;
}