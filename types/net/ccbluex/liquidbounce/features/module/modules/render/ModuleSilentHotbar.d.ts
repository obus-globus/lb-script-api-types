import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module SilentHotbar
 *
 * Disables showing the item selected in {@link SilentHotbar} in the player's hand.
 *
 * Handled in {@link MixinItemInHandRenderer}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt:26}
 */
export class ModuleSilentHotbar extends ClientModule {
    static INSTANCE: ModuleSilentHotbar;
    readonly noCooldownProgress: boolean;
}