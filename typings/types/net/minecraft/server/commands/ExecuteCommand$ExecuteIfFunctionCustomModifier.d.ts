import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { IntPredicate } from '../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { CustomModifierExecutor$ModifierAdapter } from '../../../../net/minecraft/commands/execution/CustomModifierExecutor$ModifierAdapter.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
export class ExecuteCommand$ExecuteIfFunctionCustomModifier extends Object implements CustomModifierExecutor$ModifierAdapter<CommandSourceStack> {
    private constructor(check: boolean)
    // private check: (param0: number) => boolean;
    apply(context: CommandContext<CommandSourceStack>): CommandSourceStack[];
    apply(originalSource: CommandSourceStack, currentSources: CommandSourceStack[], currentStep: ContextChain<CommandSourceStack>, modifiers: ChainModifiers, output: ExecutionControl<CommandSourceStack>): void;
}