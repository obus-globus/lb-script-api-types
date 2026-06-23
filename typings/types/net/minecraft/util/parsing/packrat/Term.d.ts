import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
export interface Term<S extends unknown> extends Object{
    parse(state: ParseState<S>, scope: Scope, control: Control): boolean;
}