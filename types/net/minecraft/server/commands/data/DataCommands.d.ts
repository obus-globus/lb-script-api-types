import type { CommandDispatcher } from '../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { DataAccessor } from '../../../../../net/minecraft/server/commands/data/DataAccessor.d.ts'
import type { DataCommands$DataProvider } from '../../../../../net/minecraft/server/commands/data/DataCommands$DataProvider.d.ts'
export class DataCommands extends Object {
    static ALL_PROVIDERS: (Object | null)[];
    static SOURCE_PROVIDERS: DataCommands$DataProvider[];
    static TARGET_PROVIDERS: DataCommands$DataProvider[];
    static getSingleTag(parampath: NbtPathArgument$NbtPath, paramaccessor: DataAccessor): Tag;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}