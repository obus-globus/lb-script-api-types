import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { StringArgumentType$StringType } from '../../../../com/mojang/brigadier/arguments/StringArgumentType$StringType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringArgumentType extends Object implements ArgumentType<string> {
    static escapeIfRequired(paramarg0: string): string;
    static getString(paramarg0: CommandContext<Object>, paramarg1: string): string;
    static greedyString(): StringArgumentType;
    static string(): StringArgumentType;
    static word(): StringArgumentType;
    private constructor(arg0: StringArgumentType$StringType)
    readonly type: StringArgumentType$StringType;
    getExamples(): string[];
    getType(): StringArgumentType$StringType;
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): string;
    parse(arg0: StringReader): string;
    toString(): string;
}