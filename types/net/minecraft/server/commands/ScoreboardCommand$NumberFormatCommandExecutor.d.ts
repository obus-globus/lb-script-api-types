import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
export interface ScoreboardCommand$NumberFormatCommandExecutor extends Object{
    run(context: CommandContext<CommandSourceStack>, format: NumberFormat): number;
}