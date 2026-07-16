import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandSyntaxException } from '../../../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { Control } from '../../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { DelayedException } from '../../../../../../net/minecraft/util/parsing/packrat/DelayedException.d.ts'
import type { NamedRule } from '../../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
import type { SuggestionSupplier } from '../../../../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
import type { Term } from '../../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class StringReaderTerms$TerminalWord extends Object implements Term<StringReader> {
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
    constructor(value: string)
    // private error: DelayedException<CommandSyntaxException>;
    // private suggestions: SuggestionSupplier<StringReader>;
    // private value: string;
    parse(state: ParseState<StringReader>, scope: Scope, control: Control): boolean;
    toString(): string;
}