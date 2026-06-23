import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule$RuleAction } from '../../../../../net/minecraft/util/parsing/packrat/Rule$RuleAction.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
export interface Rule$SimpleRuleAction<S extends unknown, T extends unknown> extends Object, Rule$RuleAction<S, T>{
    run(state: ParseState<S>): T;
    run(ruleScope: Scope): T;
}