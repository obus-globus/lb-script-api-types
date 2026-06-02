import type { CommandDispatcher } from '../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Commands$CommandSelection } from '../../../../../../net/minecraft/commands/Commands$CommandSelection.d.ts'
export interface CommandRegistrationCallback extends Object{
    register(arg0: CommandDispatcher<CommandSourceStack>, arg1: CommandBuildContext, arg2: Commands$CommandSelection): void;
}