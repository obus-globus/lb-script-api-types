import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntPredicate } from '../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
import type { CommandFunction } from '../../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { InCommandFunction } from '../../../../net/minecraft/server/commands/InCommandFunction.d.ts'
export class ExecuteCommand extends Object {
    static ERROR_FUNCTION_CONDITION_INSTANTATION_FAILURE: Dynamic2CommandExceptionType;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    static scheduleFunctionConditionsAndTest(paramoriginalSource: Object | null, paramcurrentSources: (Object | null)[], paramfunctionContextModifier: (param0: Object | null) => Object | null, paramcheck: (param0: number) => boolean, paramcurrentStep: ContextChain<Object>, paramparameters: CompoundTag, paramoutput: ExecutionControl<Object>, paramfunctionGetter: (param0: CommandContext<Object>) => CommandFunction<Object>[], parammodifiers: ChainModifiers): void;
    constructor()
}