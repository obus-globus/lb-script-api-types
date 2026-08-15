import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module SilentHotbar
 *
 * Disables showing the item selected in {@link SilentHotbar} in the player's hand.
 *
 * Handled in {@link MixinItemInHandRenderer}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleSilentHotbar.kt:33}
 */
export class ModuleSilentHotbar extends ClientModule {
    static INSTANCE: ModuleSilentHotbar;
    readonly noCooldownProgress: boolean;
}