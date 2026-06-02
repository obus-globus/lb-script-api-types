import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { PredictFeature$CalculationMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature$CalculationMode.d.ts'
export class PredictFeature$PredictOnly extends PredictFeature$CalculationMode {
    static Companion: Tagged$Companion;
    constructor(modeValueGroup: ModeValueGroup<PredictFeature$CalculationMode>)
}