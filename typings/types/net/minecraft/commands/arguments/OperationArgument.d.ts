import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { OperationArgument$Operation } from '../../../../net/minecraft/commands/arguments/OperationArgument$Operation.d.ts'
import type { ScoreAccess } from '../../../../net/minecraft/world/scores/ScoreAccess.d.ts'
export class OperationArgument extends Object implements ArgumentType<(param0: ScoreAccess, param1: ScoreAccess) => void> {
    static getOperation(paramcontext: CommandContext<CommandSourceStack>, paramname: string): (param0: ScoreAccess, param1: ScoreAccess) => void;
    static operation(): OperationArgument;
    constructor()
    getExamples(): string[];
    listSuggestions<S extends Object | number | string | boolean>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends Object | number | string | boolean>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): (param0: ScoreAccess, param1: ScoreAccess) => void;
    parse(reader: StringReader): (param0: ScoreAccess, param1: ScoreAccess) => void;
}