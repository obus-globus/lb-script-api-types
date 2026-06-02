import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
export interface DataCommands$DataManipulator extends Object{
    modify(context: CommandContext<CommandSourceStack>, targetData: CompoundTag, targetPath: NbtPathArgument$NbtPath, source: Tag[]): number;
}