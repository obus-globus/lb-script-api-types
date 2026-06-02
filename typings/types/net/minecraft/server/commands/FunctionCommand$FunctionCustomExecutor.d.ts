import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { CustomCommandExecutor$CommandAdapter } from '../../../../net/minecraft/commands/execution/CustomCommandExecutor$CommandAdapter.d.ts'
import type { CustomCommandExecutor$WithErrorHandling } from '../../../../net/minecraft/commands/execution/CustomCommandExecutor$WithErrorHandling.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
export abstract class FunctionCommand$FunctionCustomExecutor extends CustomCommandExecutor$WithErrorHandling<CommandSourceStack> implements CustomCommandExecutor$CommandAdapter<CommandSourceStack> {
    static SINGLE_SUCCESS: number;
    private constructor()
    arguments(context: CommandContext<CommandSourceStack>): CompoundTag;
    run(context: CommandContext<T>): number;
    runGuarded(sender: CommandSourceStack, currentStep: ContextChain<CommandSourceStack>, modifiers: ChainModifiers, output: ExecutionControl<CommandSourceStack>): void;
}