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
export abstract class StringReaderTerms$TerminalCharacters extends Object implements Term<StringReader> {
    static alternative(paramterms: Object | null): Term<Object>;
    static cut(): Term<Object>;
    static empty(): Term<Object>;
    static fail(parammessage: Object): Term<Object>;
    static marker(paramname: Atom<Object>, paramvalue: Object | null): Term<Object>;
    static negativeLookahead(paramterm: Term<Object>): Term<Object>;
    static optional(paramterm: Term<Object>): Term<Object>;
    static positiveLookahead(paramterm: Term<Object>): Term<Object>;
    static repeated(paramelement: NamedRule<Object, Object>, paramlistName: Atom<Object>): Term<Object>;
    static repeated(paramelement: NamedRule<Object, Object>, paramlistName: Atom<Object>, paramminRepetitions: number): Term<Object>;
    static repeatedWithTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<Object>, paramseparator: Term<Object>): Term<Object>;
    static repeatedWithTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<Object>, paramseparator: Term<Object>, paramminRepetitions: number): Term<Object>;
    static repeatedWithoutTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<Object>, paramseparator: Term<Object>): Term<Object>;
    static repeatedWithoutTrailingSeparator(paramelement: NamedRule<Object, Object>, paramlistName: Atom<Object>, paramseparator: Term<Object>, paramminRepetitions: number): Term<Object>;
    static sequence(paramterms: Object | null): Term<Object>;
    constructor(values: (Object | null)[])
    // private error: DelayedException<CommandSyntaxException>;
    // private suggestions: SuggestionSupplier<StringReader>;
    isAccepted(value: string): boolean;
    parse(state: ParseState<StringReader>, scope: Scope, control: Control): boolean;
}