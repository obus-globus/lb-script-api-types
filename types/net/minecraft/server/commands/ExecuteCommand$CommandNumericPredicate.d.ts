import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export interface ExecuteCommand$CommandNumericPredicate extends Object{
    test(c: CommandContext<CommandSourceStack>): number;
}