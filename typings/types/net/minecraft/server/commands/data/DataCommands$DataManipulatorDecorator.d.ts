import type { ArgumentBuilder } from '../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { DataCommands$DataManipulator } from '../../../../../net/minecraft/server/commands/data/DataCommands$DataManipulator.d.ts'
export interface DataCommands$DataManipulatorDecorator extends Object {
    create(manipulator: (param0: CommandContext<CommandSourceStack>, param1: CompoundTag, param2: NbtPathArgument$NbtPath, param3: Tag[]) => kotlin.Int): ArgumentBuilder<CommandSourceStack, Object>;
}