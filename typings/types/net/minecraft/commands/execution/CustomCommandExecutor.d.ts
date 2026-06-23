import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
export interface CustomCommandExecutor<T extends unknown> extends Object{
    run(sender: T, currentStep: ContextChain<T>, modifiers: ChainModifiers, output: ExecutionControl<T>): void;
}