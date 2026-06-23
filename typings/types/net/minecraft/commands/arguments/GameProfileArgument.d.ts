import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { GameProfileArgument$Result } from '../../../../net/minecraft/commands/arguments/GameProfileArgument$Result.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
export class GameProfileArgument extends Object implements ArgumentType<(param0: CommandSourceStack) => NameAndId[]> {
    static ERROR_UNKNOWN_PLAYER: SimpleCommandExceptionType;
    static gameProfile(): GameProfileArgument;
    static getGameProfiles(paramsource: CommandContext<CommandSourceStack>, paramname: string): NameAndId[];
    constructor()
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(contextBuilder: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): (param0: CommandSourceStack) => NameAndId[];
    parse(reader: StringReader): (param0: CommandSourceStack) => NameAndId[];
    parse<S extends unknown>(reader: StringReader, source: S): (param0: CommandSourceStack) => NameAndId[];
}