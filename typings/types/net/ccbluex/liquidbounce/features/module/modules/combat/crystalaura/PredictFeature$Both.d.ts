import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { PredictFeature$CalculationMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature$CalculationMode.d.ts'
import type { PredictFeature$LogicalOperator } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature$LogicalOperator.d.ts'
export class PredictFeature$Both extends PredictFeature$CalculationMode {
    static Companion: Tagged$Companion;
    constructor(modeValueGroup: ModeValueGroup<PredictFeature$CalculationMode>)
    readonly logicalOperator: PredictFeature$LogicalOperator;
}