import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomCommandExecutor } from '../../../../net/minecraft/commands/execution/CustomCommandExecutor.d.ts'
export interface CustomCommandExecutor$CommandAdapter<T extends Object | number | string | boolean> extends Command<T>, Object, CustomCommandExecutor<T>{
    run(context: CommandContext<T>): number;
}