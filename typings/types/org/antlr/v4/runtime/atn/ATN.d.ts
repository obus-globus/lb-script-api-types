import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { ATNType } from '../../../../../org/antlr/v4/runtime/atn/ATNType.d.ts'
import type { DecisionState } from '../../../../../org/antlr/v4/runtime/atn/DecisionState.d.ts'
import type { LexerAction } from '../../../../../org/antlr/v4/runtime/atn/LexerAction.d.ts'
import type { RuleStartState } from '../../../../../org/antlr/v4/runtime/atn/RuleStartState.d.ts'
import type { RuleStopState } from '../../../../../org/antlr/v4/runtime/atn/RuleStopState.d.ts'
import type { TokensStartState } from '../../../../../org/antlr/v4/runtime/atn/TokensStartState.d.ts'
import type { IntervalSet } from '../../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class ATN extends Object {
    static INVALID_ALT_NUMBER: number;
    constructor(arg0: ATNType, arg1: number)
    decisionToState: DecisionState[];
    grammarType: ATNType;
    lexerActions: LexerAction[];
    maxTokenType: number;
    modeNameToStartState: JavaMap<string, TokensStartState>;
    modeToStartState: TokensStartState[];
    ruleToStartState: RuleStartState[];
    ruleToStopState: RuleStopState[];
    ruleToTokenType: number[];
    states: ATNState[];
    addState(arg0: ATNState): void;
    defineDecisionState(arg0: DecisionState): number;
    getDecisionState(arg0: number): DecisionState;
    getExpectedTokens(arg0: number, arg1: RuleContext): IntervalSet;
    getNumberOfDecisions(): number;
    nextTokens(arg0: ATNState): IntervalSet;
    nextTokens(arg0: ATNState, arg1: RuleContext): IntervalSet;
    removeState(arg0: ATNState): void;
}