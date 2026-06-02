import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { ATN } from '../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { ATNConfig } from '../../../../../org/antlr/v4/runtime/atn/ATNConfig.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { PredictionContext } from '../../../../../org/antlr/v4/runtime/atn/PredictionContext.d.ts'
import type { IntervalSet } from '../../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class LL1Analyzer extends Object {
    static HIT_PRED: number;
    constructor(arg0: ATN)
    atn: ATN;
    LOOK(arg0: ATNState, arg1: RuleContext): IntervalSet;
    LOOK(arg0: ATNState, arg1: ATNState, arg2: RuleContext): IntervalSet;
    _LOOK(arg0: ATNState, arg1: ATNState, arg2: PredictionContext, arg3: IntervalSet, arg4: ATNConfig[], arg5: BitSet, arg6: boolean, arg7: boolean): void;
    getDecisionLookahead(arg0: ATNState): IntervalSet[];
}