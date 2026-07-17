import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
import type { Rule$RuleAction } from '../../../../../net/minecraft/util/parsing/packrat/Rule$RuleAction.d.ts'
import type { Term } from '../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class Rule$WrappedTerm<S extends unknown, T extends unknown> extends Record implements Rule<S, T> {
    constructor(action: (param0: ParseState<S>) => T, child: Term<S>)
    // private action: (param0: ParseState<S>) => T;
    // private child: Term<S>;
    action(): (param0: ParseState<S>) => T;
    child(): Term<S>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    parse(state: ParseState<S>): T;
    toString(): string;
}