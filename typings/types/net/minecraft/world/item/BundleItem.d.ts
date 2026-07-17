import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { SlotAccess } from '../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { ClickAction } from '../../../../net/minecraft/world/inventory/ClickAction.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { TooltipComponent } from '../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { ItemUseAnimation } from '../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class BundleItem extends Item {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: JavaMap<Block, Item>;
    static CODEC: Codec<Holder<Item>>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Holder<Item>>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static MAX_BAR_WIDTH: number;
    static MAX_SHOWN_GRID_ITEMS: number;
    static MAX_SHOWN_GRID_ITEMS_X: number;
    static MAX_SHOWN_GRID_ITEMS_Y: number;
    static OVERFLOWING_MAX_SHOWN_GRID_ITEMS: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Item>>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getFullnessDisplay(paramitemStack: ItemStack): number;
    static getId(paramitem: Item): number;
    static getNumberOfItemsToShow(paramstack: ItemStack): number;
    static getSelectedItem(paramstack: ItemStack): ItemStackTemplate;
    static getSelectedItemIndex(paramstack: ItemStack): number;
    static toggleSelectedItem(paramstack: ItemStack, paramselectedItem: number): void;
    constructor(properties: Item$Properties)
    // private broadcastChangesOnContainerMenu(player: Player): void;
    // private dropContent(bundle: ItemStack, player: Player): boolean;
    // private dropContent(level: Level, player: Player, itemStack: ItemStack): void;
    getBarColor(stack: ItemStack): number;
    getBarWidth(stack: ItemStack): number;
    getTooltipImage(bundle: ItemStack): Optional<TooltipComponent>;
    getUseAnimation(itemStack: ItemStack): ItemUseAnimation;
    getUseDuration(itemStack: ItemStack, entity: LivingEntity): number;
    isBarVisible(stack: ItemStack): boolean;
    onDestroyed(entity: ItemEntity): void;
    onUseTick(level: Level, livingEntity: LivingEntity, itemStack: ItemStack, ticksRemaining: number): void;
    overrideOtherStackedOnMe(self: ItemStack, other: ItemStack, slot: Slot, clickAction: ClickAction, player: Player, carriedItem: SlotAccess): boolean;
    overrideStackedOnOther(self: ItemStack, slot: Slot, clickAction: ClickAction, player: Player): boolean;
    use(level: Level, player: Player, hand: InteractionHand): InteractionResult;
}