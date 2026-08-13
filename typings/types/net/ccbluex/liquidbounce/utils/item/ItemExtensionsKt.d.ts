import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ItemExtensionsKt extends Object {
    static canMerge(self: ItemStack, other: ItemStack): boolean;
    /**
     * Create item with NBT tags
     *
     * @docs https://minecraft.gamepedia.com/Commands/give
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:100}
     */
    static createItem(stack: string, amount: number): ItemStack;
    static createItem(self: ClientLevel, raw: string): ItemStack;
    static createSplashPotion(name: string, ...effects: MobEffectInstance[]): ItemStack;
    static getAttackDamage(paramarg0: ItemStack): number;
    static getAttackSpeed(paramarg0: ItemStack): number;
    /**
     * @param slot if null, all modifiers for the attribute will be applied, otherwise only modifiers for the specified slot
     * @see net.minecraft.world.item.component.ItemAttributeModifiers
     * @see net.minecraft.world.entity.ai.attributes.AttributeInstance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L208 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:208}
     */
    static getAttributeValue(paramarg0: DataComponentGetter, paramarg1: Holder<Attribute>): number;
    static getAttributeValue(paramarg0: DataComponentGetter, paramarg1: Holder<Attribute>, paramarg2: EquipmentSlot): number;
    static getAttributeValue(self: DataComponentGetter, attribute: Holder<Attribute>, slot: EquipmentSlot | null, baseValue: number): number;
    /**
     * Get {@link Block} of inner item if it is {@link BlockItem}, or null if not
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L265 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:265}
     */
    static getBlock(self: ItemStack): Block | null;
    /**
     * @see net.minecraft.world.entity.player.Player.getDestroySpeed
     * @see net.minecraft.world.entity.ai.attributes.Attributes.MINING_EFFICIENCY
     * @see net.minecraft.world.item.enchantment.LevelBasedValue.LevelsSquared
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L250 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:250}
     */
    static getDestroySpeedWithEnchantment(self: ItemStack, state: BlockState): number;
    static getDurability(paramarg0: ItemStack): number;
    static getOrNull<E extends unknown>(self: ResourceKey<E[]>): E[] | null;
    static getPotionEffects(self: ItemStack): MobEffectInstance[];
    static getSharpnessDamage(paramarg0: ItemStack): number;
    static getSharpnessDamage(self: ItemStack, level: number): number;
    static isFullBlock(self: ItemStack): boolean;
    static isInteractable(self: ItemStack): boolean;
    /**
     * @returns if this item stack has same {@link Item} and {@link net.minecraft.core.component.DataComponentPatch}
with the other item stack
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L155 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:155}
     */
    static isMergeable(self: ItemStack, other: ItemStack): boolean;
    /**
     * Set player inventory item (Creative mode only)
     *
     * @see net.minecraft.client.multiplayer.MultiPlayerGameMode.handleCreativeModeItemAdd
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:119}
     */
    static setInventoryItemCreative(self: LocalPlayer, slot: number, itemStack: ItemStack, animation: boolean): void;
    static toRegistryEntryOrNull(self: ResourceKey<Enchantment>): Holder<Enchantment> | null;
}