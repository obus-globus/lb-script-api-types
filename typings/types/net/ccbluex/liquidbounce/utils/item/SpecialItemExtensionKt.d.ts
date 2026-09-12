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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/SpecialItemExtension.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/SpecialItemExtension.kt:36}
     */
    static toNativeImage(self: MapItemSavedData): NativeImage;
}