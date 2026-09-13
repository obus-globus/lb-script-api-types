import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemCooldownsAddition$Entry } from '../../../../../net/ccbluex/liquidbounce/interfaces/ItemCooldownsAddition$Entry.d.ts'
import type { ItemCooldowns } from '../../../../../net/minecraft/world/item/ItemCooldowns.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { MapItemSavedData } from '../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
export class SpecialItemExtensionKt extends Object {
    static getCooldown(self: ItemCooldowns, stack: ItemStack): ItemCooldownsAddition$Entry | null;
    /**
     * @see net.minecraft.client.resources.MapTextureManager.MapInstance.updateTextureIfNeeded
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/SpecialItemExtension.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/SpecialItemExtension.kt:36}
     */
    static toNativeImage(self: MapItemSavedData): NativeImage;
}