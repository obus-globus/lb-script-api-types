import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
import type { Term } from '../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class Term$Alternative<S extends unknown> extends Record implements Term<S> {
    constructor(elements: Term<S>[])
    // private elements: Term<S>[];
    elements(): Term<S>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    parse(state: ParseState<S>, scope: Scope, control: Control): boolean;
    toString(): string;
}