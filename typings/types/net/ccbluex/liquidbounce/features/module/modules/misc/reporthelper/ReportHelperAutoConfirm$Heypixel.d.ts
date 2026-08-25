import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ReportHelperAutoConfirm$Mode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm$Mode.d.ts'
import type { AbstractContainerScreen } from '../../../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
/**
 * Type: Selection Screen (9x1)
 * Pattern:
 * DiamondSword = report as hack
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm.kt:105}
 */
export class ReportHelperAutoConfirm$Heypixel extends ReportHelperAutoConfirm$Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ReportHelperAutoConfirm$Heypixel;
    protected onScreenUpdated(screen: AbstractContainerScreen<any>): void;
}