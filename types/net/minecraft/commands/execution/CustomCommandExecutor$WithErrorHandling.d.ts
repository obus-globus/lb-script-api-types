import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { CommandSyntaxException } from '../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { CustomCommandExecutor } from '../../../../net/minecraft/commands/execution/CustomCommandExecutor.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
import type { TraceCallbacks } from '../../../../net/minecraft/commands/execution/TraceCallbacks.d.ts'
export abstract class CustomCommandExecutor$WithErrorHandling<T extends ExecutionCommandSource<T>> extends Object implements CustomCommandExecutor<T> {
    constructor()
    onError(e: CommandSyntaxException, sender: T, modifiers: ChainModifiers, tracer: TraceCallbacks): void;
    run(sender: T, currentStep: ContextChain<T>, modifiers: ChainModifiers, output: ExecutionControl<T>): void;
    runGuarded(sender: T, currentStep: ContextChain<T>, modifiers: ChainModifiers, output: ExecutionControl<T>): void;
}