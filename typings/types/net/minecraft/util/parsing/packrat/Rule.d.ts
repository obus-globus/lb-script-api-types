import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
export interface Rule<S extends unknown, T extends unknown> extends Object{
    parse(state: ParseState<S>): T;
}