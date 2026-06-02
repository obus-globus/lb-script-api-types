import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface DataAccessor extends Object{
    getData(): CompoundTag;
    getModifiedSuccess(): Component;
    getPrintSuccess(path: NbtPathArgument$NbtPath, scale: number, value: number): Component;
    getPrintSuccess(data: Tag): Component;
    setData(tag: CompoundTag): void;
}