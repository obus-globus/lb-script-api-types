import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DataAccessor } from '../../../../../net/minecraft/server/commands/data/DataAccessor.d.ts'
import type { DataCommands$DataProvider } from '../../../../../net/minecraft/server/commands/data/DataCommands$DataProvider.d.ts'
import type { CommandStorage } from '../../../../../net/minecraft/world/level/storage/CommandStorage.d.ts'
export class StorageDataAccessor extends Object implements DataAccessor {
    static PROVIDER: (param0: string) => DataCommands$DataProvider;
    private constructor(storage: CommandStorage, id: Identifier)
    // private id: Identifier;
    // private storage: CommandStorage;
    getData(): CompoundTag;
    getModifiedSuccess(): Component;
    getPrintSuccess(path: NbtPathArgument$NbtPath, scale: number, value: number): Component;
    getPrintSuccess(data: Tag): Component;
    setData(tag: CompoundTag): void;
}