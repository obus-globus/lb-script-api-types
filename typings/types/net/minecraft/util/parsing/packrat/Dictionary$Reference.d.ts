import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { Dictionary$Entry } from '../../../../../net/minecraft/util/parsing/packrat/Dictionary$Entry.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
import type { Term } from '../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class Dictionary$Reference<S extends unknown, T extends unknown> extends Record implements Term<S> {
    private constructor(ruleToParse: Dictionary$Entry<S, T>, nameToStore: Atom<T>)
    // private nameToStore: Atom<T>;
    // private ruleToParse: Dictionary$Entry<S, T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nameToStore(): Atom<T>;
    parse(state: ParseState<S>, scope: Scope, control: Control): boolean;
    ruleToParse(): Dictionary$Entry<S, T>;
    toString(): string;
}