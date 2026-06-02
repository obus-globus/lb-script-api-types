import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { ATN } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { ATNConfig } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNConfig.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { PredictionContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContext.d.ts'
import type { IntervalSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LL1Analyzer extends Object {
    constructor(arg0: ATN)
    atn: ATN;
    LOOK(arg0: ATNState, arg1: RuleContext): IntervalSet;
    LOOK(arg0: ATNState, arg1: ATNState, arg2: RuleContext): IntervalSet;
    _LOOK(arg0: ATNState, arg1: ATNState, arg2: PredictionContext, arg3: IntervalSet, arg4: ATNConfig[], arg5: BitSet, arg6: boolean, arg7: boolean): void;
}