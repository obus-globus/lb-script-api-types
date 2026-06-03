import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { CustomCommandExecutor$CommandAdapter } from '../../../../net/minecraft/commands/execution/CustomCommandExecutor$CommandAdapter.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
export class ReturnCommand$ReturnValueCustomExecutor<T extends ExecutionCommandSource<T>> extends Object implements CustomCommandExecutor$CommandAdapter<T> {
    static SINGLE_SUCCESS: number;
    private constructor()
    run(context: CommandContext<T>): number;
    run(sender: T, currentStep: ContextChain<T>, modifiers: ChainModifiers, output: ExecutionControl<T>): void;
    run(context: CommandContext<T>): number;
}