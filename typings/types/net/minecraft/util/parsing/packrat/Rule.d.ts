import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
export interface Rule<S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    parse(state: ParseState<S>): T;
}