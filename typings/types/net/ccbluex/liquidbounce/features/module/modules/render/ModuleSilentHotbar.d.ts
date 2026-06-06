import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module SilentHotbar
 *
 * Disables showing the item selected in {@link SilentHotbar} in the player's hand.
 *
 * Handled in {@link MixinItemInHandRenderer}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt:26}
 */
export class ModuleSilentHotbar extends ClientModule {
    static INSTANCE: ModuleSilentHotbar;
    readonly noCooldownProgress: boolean;
}