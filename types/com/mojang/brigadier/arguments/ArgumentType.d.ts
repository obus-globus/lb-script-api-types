import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ArgumentType<T extends Object | number | string | boolean> extends Object{
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse(arg0: StringReader): T;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
}