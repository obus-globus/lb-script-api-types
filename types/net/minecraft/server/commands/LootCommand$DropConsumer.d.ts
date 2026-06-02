import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { LootCommand$Callback } from '../../../../net/minecraft/server/commands/LootCommand$Callback.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface LootCommand$DropConsumer extends Object{
    accept(context: CommandContext<CommandSourceStack>, drops: ItemStack[], successCallback: (param0: ItemStack[]) => void): number;
}