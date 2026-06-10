import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ChainModifiers } from '../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { CustomCommandExecutor$CommandAdapter } from '../../../../net/minecraft/commands/execution/CustomCommandExecutor$CommandAdapter.d.ts'
import type { CustomCommandExecutor$WithErrorHandling } from '../../../../net/minecraft/commands/execution/CustomCommandExecutor$WithErrorHandling.d.ts'
import type { ExecutionControl } from '../../../../net/minecraft/commands/execution/ExecutionControl.d.ts'
export class DebugCommand$TraceCustomExecutor extends CustomCommandExecutor$WithErrorHandling<CommandSourceStack> implements CustomCommandExecutor$CommandAdapter<CommandSourceStack> {
    static SINGLE_SUCCESS: number;
    private constructor()
    run(context: CommandContext<CommandSourceStack>): number;
    runGuarded(source: CommandSourceStack, currentStep: ContextChain<CommandSourceStack>, modifiers: ChainModifiers, context: ExecutionControl<CommandSourceStack>): void;
}