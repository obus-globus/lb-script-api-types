import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { FunctionCommand$Callbacks } from '../../../../net/minecraft/server/commands/FunctionCommand$Callbacks.d.ts'
export class FunctionCommand extends Object {
    static ERROR_FUNCTION_INSTANTATION_FAILURE: Dynamic2CommandExceptionType;
    static SUGGEST_FUNCTION: (param0: CommandSourceStack, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static modifySenderForExecution(paramsender: CommandSourceStack): CommandSourceStack;
    static queueFunctions(paramfunctions: E[], paramarguments: CompoundTag, paramoriginalSource: Object | null, paramfunctionSource: Object | null, paramoutput: ExecutionControl<Object>, paramcallbacks: FunctionCommand$Callbacks<Object>, parammodifiers: ChainModifiers): void;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}