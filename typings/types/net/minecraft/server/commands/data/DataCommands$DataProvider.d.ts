import type { ArgumentBuilder } from '../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { DataAccessor } from '../../../../../net/minecraft/server/commands/data/DataAccessor.d.ts'
export interface DataCommands$DataProvider extends Object{
    access(context: CommandContext<CommandSourceStack>): DataAccessor;
    wrap(parent: ArgumentBuilder<CommandSourceStack, Object>, function_: (param0: ArgumentBuilder<CommandSourceStack, Object>) => ArgumentBuilder<CommandSourceStack, Object>): ArgumentBuilder<CommandSourceStack, Object>;
}