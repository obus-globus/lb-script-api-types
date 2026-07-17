import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class QuickPurchaseMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: QuickPurchaseMode;
    readonly delayMs: { start: number; endInclusive: number; step: number };
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly waitForItems: boolean;
}