import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { DisplaySlot } from '../../../../net/minecraft/world/scores/DisplaySlot.d.ts'
export class ScoreboardSlotArgument extends Object implements ArgumentType<DisplaySlot> {
    static ERROR_INVALID_VALUE: DynamicCommandExceptionType;
    static displaySlot(): ScoreboardSlotArgument;
    static getDisplaySlot(paramcontext: CommandContext<CommandSourceStack>, paramname: string): DisplaySlot;
    private constructor()
    getExamples(): string[];
    listSuggestions<S extends Object | number | string | boolean>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends Object | number | string | boolean>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): DisplaySlot;
    parse(reader: StringReader): DisplaySlot;
}