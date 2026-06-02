import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BoolArgumentType extends Object implements ArgumentType<boolean> {
    static bool(): BoolArgumentType;
    static getBool(paramarg0: CommandContext<Object>, paramarg1: string): boolean;
    private constructor()
    getExamples(): E[];
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<T extends Object | number | string | boolean, S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
    parse(arg0: StringReader): boolean;
}