import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/reporthelper/ReportHelperAutoConfirm.kt:62}
 */
export class ReportHelperAutoConfirm$Hypixel extends ReportHelperAutoConfirm$Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ReportHelperAutoConfirm$Hypixel;
    // private emptyIndices: number[];
    protected onScreenUpdated(screen: AbstractContainerScreen<Object>): void;
}