import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InstantiatedFunction } from '../../../../net/minecraft/commands/functions/InstantiatedFunction.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface CommandFunction<T extends unknown> extends Object{
    id(): Identifier;
    instantiate(arguments: CompoundTag, dispatcher: CommandDispatcher<T>): InstantiatedFunction<T>;
}