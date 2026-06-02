import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModelWrapper } from '../../../../../net/ccbluex/liquidbounce/deeplearn/models/ModelWrapper.d.ts'
export class TwoDimensionalRegressionModel extends ModelWrapper<number[], number[]> {
    static Companion: Tagged$Companion;
    constructor(name: string, parent: ModeValueGroup<Object>)
}