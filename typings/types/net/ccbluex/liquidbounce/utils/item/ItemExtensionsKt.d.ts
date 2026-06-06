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
    static canMerge(itemStack: ItemStack, other: ItemStack): boolean;
    /**
     * Create item with NBT tags
     *
     * @docs https://minecraft.gamepedia.com/Commands/give
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:95}
     */
    static createItem(paramarg0: string, paramarg1: number): ItemStack;
    static createItem(paramarg0: ClientLevel, paramarg1: string): ItemStack;
    static createSplashPotion(name: string, effects: (Object | null)[]): ItemStack;
    static getAttackDamage(paramarg0: ItemStack): number;
    static getAttackSpeed(paramarg0: ItemStack): number;
    /**
     * @param slot if null, all modifiers for the attribute will be applied, otherwise only modifiers for the specified slot
     * @see net.minecraft.world.item.component.ItemAttributeModifiers
     * @see net.minecraft.world.entity.ai.attributes.AttributeInstance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L202 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:202}
     */
    static getAttributeValue(paramarg0: DataComponentGetter, paramarg1: Holder<Attribute>): number;
    static getAttributeValue(paramarg0: DataComponentGetter, paramarg1: Holder<Attribute>, paramarg2: EquipmentSlot): number;
    static getAttributeValue(dataComponentGetter: DataComponentGetter, attribute: Holder<Attribute>, slot: EquipmentSlot, baseValue: number): number;
    /**
     * Get {@link Block} of inner item if it is {@link BlockItem}, or null if not
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L262 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:262}
     */
    static getBlock(itemStack: ItemStack): Block;
    /**
     * @see net.minecraft.world.entity.player.Player.getDestroySpeed
     * @see net.minecraft.world.entity.ai.attributes.Attributes.MINING_EFFICIENCY
     * @see net.minecraft.world.item.enchantment.LevelBasedValue.LevelsSquared
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L245 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:245}
     */
    static getDestroySpeedWithEnchantment(itemStack: ItemStack, state: BlockState): number;
    static getDurability(paramarg0: ItemStack): number;
    static getOrNull(resourceKey: ResourceKey<Object>): (Object | null)[];
    static getPotionEffects(itemStack: ItemStack): MobEffectInstance[];
    static getSharpnessDamage(paramarg0: ItemStack): number;
    static getSharpnessDamage(itemStack: ItemStack, level: number): number;
    static isFullBlock(itemStack: ItemStack): boolean;
    static isInteractable(itemStack: ItemStack): boolean;
    /**
     * @returns if this item stack has same {@link Item} and {@link net.minecraft.core.component.DataComponentPatch}
with the other item stack
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L151 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:151}
     */
    static isMergeable(itemStack: ItemStack, other: ItemStack): boolean;
    /**
     * Set player inventory item (Creative mode only)
     *
     * @see net.minecraft.client.multiplayer.MultiPlayerGameMode.handleCreativeModeItemAdd
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt#L114 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemExtensions.kt:114}
     */
    static setInventoryItemCreative(localPlayer: LocalPlayer, slot: number, itemStack: ItemStack, animation: boolean): void;
    static toRegistryEntryOrNull(resourceKey: ResourceKey<Enchantment>): Holder<Enchantment>;
}