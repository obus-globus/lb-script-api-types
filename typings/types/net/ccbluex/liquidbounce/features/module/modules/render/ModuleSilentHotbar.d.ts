import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module SilentHotbar
 *
 * Disables showing the item selected in {@link SilentHotbar} in the player's hand.
 *
 * Handled in {@link MixinItemInHandRenderer}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt:33}
 */
export class ModuleSilentHotbar extends ClientModule {
    static INSTANCE: ModuleSilentHotbar;
    readonly noCooldownProgress: boolean;
}