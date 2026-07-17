import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandSyntaxException } from '../../../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Control } from '../../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { DelayedException } from '../../../../../../net/minecraft/util/parsing/packrat/DelayedException.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
import type { SuggestionSupplier } from '../../../../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
import type { Term } from '../../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export abstract class StringReaderTerms$TerminalCharacters extends Object implements Term<StringReader> {
    constructor(values: (Object | null)[])
    // private error: DelayedException<CommandSyntaxException>;
    // private suggestions: SuggestionSupplier<StringReader>;
    isAccepted(value: string): boolean;
    parse(state: ParseState<StringReader>, scope: Scope, control: Control): boolean;
}