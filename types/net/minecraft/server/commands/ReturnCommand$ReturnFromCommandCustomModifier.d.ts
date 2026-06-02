import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { CustomModifierExecutor$ModifierAdapter } from '../../../../net/minecraft/commands/execution/CustomModifierExecutor$ModifierAdapter.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
export class ReturnCommand$ReturnFromCommandCustomModifier<T extends ExecutionCommandSource<T>> extends Object implements CustomModifierExecutor$ModifierAdapter<T> {
    private constructor()
    apply(context: CommandContext<T>): E[];
    apply(originalSource: T, currentSources: T[], currentStep: ContextChain<T>, modifiers: ChainModifiers, output: ExecutionControl<T>): void;
}