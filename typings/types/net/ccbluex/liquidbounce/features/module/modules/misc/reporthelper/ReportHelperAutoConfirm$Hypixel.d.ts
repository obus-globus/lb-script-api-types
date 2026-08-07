import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ReportHelperAutoConfirm$Mode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm$Mode.d.ts'
import type { AbstractContainerScreen } from '../../../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
/**
 * Type: Confirm Screen (9x3)
 * Pattern:
 * - 9x air
 * - 2x air / yes / air / player head / air / no / 2x air
 * - 9x air
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm.kt:69}
 */
export class ReportHelperAutoConfirm$Hypixel extends ReportHelperAutoConfirm$Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ReportHelperAutoConfirm$Hypixel;
    // private emptyIndices: number[];
    protected onScreenUpdated(screen: AbstractContainerScreen<any>): void;
}