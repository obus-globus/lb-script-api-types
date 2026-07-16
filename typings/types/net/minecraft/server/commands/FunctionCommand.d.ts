import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
import type { CommandFunction } from '../../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { FunctionCommand$Callbacks } from '../../../../net/minecraft/server/commands/FunctionCommand$Callbacks.d.ts'
export class FunctionCommand extends Object {
    static ERROR_FUNCTION_INSTANTATION_FAILURE: Dynamic2CommandExceptionType;
    static SUGGEST_FUNCTION: (param0: CommandContext<CommandSourceStack>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static modifySenderForExecution(paramsender: CommandSourceStack): CommandSourceStack;
    static queueFunctions<T extends ExecutionCommandSource<T>>(paramfunctions: CommandFunction<T>[], paramarguments: CompoundTag, paramoriginalSource: T, paramfunctionSource: T, paramoutput: ExecutionControl<T>, paramcallbacks: FunctionCommand$Callbacks<T>, parammodifiers: ChainModifiers): void;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}