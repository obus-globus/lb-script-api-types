import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { ATNType } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNType.d.ts'
import type { DecisionState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/DecisionState.d.ts'
import type { LexerAction } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerAction.d.ts'
import type { RuleStartState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/RuleStartState.d.ts'
import type { RuleStopState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/RuleStopState.d.ts'
import type { TokensStartState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/TokensStartState.d.ts'
import type { IntervalSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ATN extends Object {
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
}