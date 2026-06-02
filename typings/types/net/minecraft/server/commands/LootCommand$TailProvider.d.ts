import type { ArgumentBuilder } from '../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { LootCommand$Callback } from '../../../../net/minecraft/server/commands/LootCommand$Callback.d.ts'
import type { LootCommand$DropConsumer } from '../../../../net/minecraft/server/commands/LootCommand$DropConsumer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface LootCommand$TailProvider extends Object{
    construct(root: ArgumentBuilder<CommandSourceStack, Object>, consumer: (param0: CommandContext<CommandSourceStack>, param1: ItemStack[], param2: (param0: ItemStack[]) => void) => kotlin.Int): ArgumentBuilder<CommandSourceStack, Object>;
}