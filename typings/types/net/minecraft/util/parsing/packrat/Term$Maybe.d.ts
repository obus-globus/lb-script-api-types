import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
import type { Term } from '../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class Term$Maybe<S extends unknown> extends Record implements Term<S> {
    static alternative(paramterms: Object | null): Term<Object>;
    static cut(): Term<Object>;
    static empty(): Term<Object>;
    static fail(parammessage: Object): Term<Object>;
    static marker(paramname: Atom<Object>, paramvalue: Object | null): Term<Object>;
    static negativeLookahead(paramterm: Term<Object>): Term<Object>;
    static optional(paramterm: Term<Object>): Term<Object>;
    static positiveLookahead(paramterm: Term<Object>): Term<Object>;
    static repeated(paramelement: NamedRule<Object, Object>, paramlistName: Atom<(Object | null)[]>): Term<Object>;
    static repeated(paramelement: NamedRule<Object, Object>, paramlistName: Atom<(Object | null)[]>, paramminRepetitions: number): Term<Object>;
    static repeatedWithTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<(Object | null)[]>, paramseparator: Term<Object>): Term<Object>;
    static repeatedWithTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<(Object | null)[]>, paramseparator: Term<Object>, paramminRepetitions: number): Term<Object>;
    static repeatedWithoutTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<(Object | null)[]>, paramseparator: Term<Object>): Term<Object>;
    static repeatedWithoutTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<(Object | null)[]>, paramseparator: Term<Object>, paramminRepetitions: number): Term<Object>;
    static sequence(paramterms: Object | null): Term<Object>;
    constructor(term: Term<S>)
    // private term: Term<S>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    parse(state: ParseState<S>, scope: Scope, control: Control): boolean;
    term(): Term<S>;
    toString(): string;
}