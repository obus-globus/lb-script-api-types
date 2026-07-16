import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
import type { Term } from '../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class Term$Marker<S extends unknown, T extends unknown> extends Record implements Term<S> {
    static alternative<S extends unknown>(...paramterms: Term<S>[]): Term<S>;
    static cut<S extends unknown>(): Term<S>;
    static empty<S extends unknown>(): Term<S>;
    static fail<S extends unknown>(parammessage: Object): Term<S>;
    static marker<S extends unknown, T extends unknown>(paramname: Atom<T>, paramvalue: T): Term<S>;
    static negativeLookahead<S extends unknown>(paramterm: Term<S>): Term<S>;
    static optional<S extends unknown>(paramterm: Term<S>): Term<S>;
    static positiveLookahead<S extends unknown>(paramterm: Term<S>): Term<S>;
    static repeated<S extends unknown, T extends unknown>(paramelement: NamedRule<S, T>, paramlistName: Atom<T[]>): Term<S>;
    static repeated<S extends unknown, T extends unknown>(paramelement: NamedRule<S, T>, paramlistName: Atom<T[]>, paramminRepetitions: number): Term<S>;
    static repeatedWithTrailingSeparator<S extends unknown, T extends unknown>(paramelement: NamedRule<S, T>, paramlistName: Atom<T[]>, paramseparator: Term<S>): Term<S>;
    static repeatedWithTrailingSeparator<S extends unknown, T extends unknown>(paramelement: NamedRule<S, T>, paramlistName: Atom<T[]>, paramseparator: Term<S>, paramminRepetitions: number): Term<S>;
    static repeatedWithoutTrailingSeparator<S extends unknown, T extends unknown>(paramelement: NamedRule<S, T>, paramlistName: Atom<T[]>, paramseparator: Term<S>): Term<S>;
    static repeatedWithoutTrailingSeparator<S extends unknown, T extends unknown>(paramelement: NamedRule<S, T>, paramlistName: Atom<T[]>, paramseparator: Term<S>, paramminRepetitions: number): Term<S>;
    static sequence<S extends unknown>(...paramterms: Term<S>[]): Term<S>;
    constructor(name: Atom<T>, value: T)
    // private name: Atom<T>;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): Atom<T>;
    parse(state: ParseState<S>, scope: Scope, control: Control): boolean;
    toString(): string;
    value(): T;
}