import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ScoreHolderArgument$Result } from '../../../../net/minecraft/commands/arguments/ScoreHolderArgument$Result.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ScoreHolderArgument extends Object implements ArgumentType<(param0: CommandSourceStack, param1: () => ScoreHolder[]) => ScoreHolder[]> {
    static SUGGEST_SCORE_HOLDERS: (param0: CommandContext<CommandSourceStack>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static getName(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ScoreHolder;
    static getNames(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ScoreHolder[];
    static getNames(paramcontext: CommandContext<CommandSourceStack>, paramname: string, paramwildcard: () => ScoreHolder[]): ScoreHolder[];
    static getNamesWithDefaultWildcard(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ScoreHolder[];
    static scoreHolder(): ScoreHolderArgument;
    static scoreHolders(): ScoreHolderArgument;
    constructor(multiple: boolean)
    // private multiple: boolean;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): (param0: CommandSourceStack, param1: () => ScoreHolder[]) => ScoreHolder[];
    parse(reader: StringReader): (param0: CommandSourceStack, param1: () => ScoreHolder[]) => ScoreHolder[];
    parse<S extends unknown>(reader: StringReader, source: S): (param0: CommandSourceStack, param1: () => ScoreHolder[]) => ScoreHolder[];
    // private parse(reader: StringReader, allowSelectors: boolean): (param0: CommandSourceStack, param1: () => ScoreHolder[]) => ScoreHolder[];
}