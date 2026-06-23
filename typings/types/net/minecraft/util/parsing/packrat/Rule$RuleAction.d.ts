import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
export interface Rule$RuleAction<S extends unknown, T extends unknown> extends Object{
    run(state: ParseState<S>): T;
}