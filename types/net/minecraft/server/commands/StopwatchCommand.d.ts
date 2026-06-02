import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class StopwatchCommand extends Object {
    static ERROR_DOES_NOT_EXIST: DynamicCommandExceptionType;
    static SUGGEST_STOPWATCHES: (param0: CommandSourceStack, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}