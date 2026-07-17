import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NormalPurchaseMode$ActionType } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/purchasemode/NormalPurchaseMode$ActionType.d.ts'
export class NormalPurchaseMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: NormalPurchaseMode;
    readonly action: NormalPurchaseMode$ActionType;
    readonly extraDelay: { start: number; endInclusive: number; step: number };
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
}