import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Stat } from '../../../../net/minecraft/stats/Stat.d.ts'
import type { ObjectiveCriteria } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria.d.ts'
export class ObjectiveCriteriaArgument extends Object implements ArgumentType<ObjectiveCriteria> {
    static ERROR_INVALID_VALUE: DynamicCommandExceptionType;
    static criteria(): ObjectiveCriteriaArgument;
    static getCriteria(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ObjectiveCriteria;
    private constructor()
    getExamples(): string[];
    getName<T extends unknown>(type: Stat<T>[], value: Object): string;
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): ObjectiveCriteria;
    parse(reader: StringReader): ObjectiveCriteria;
}