import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export interface ArgumentTypeInfo<A extends ArgumentType<Object>, T extends ArgumentTypeInfo$Template<A>> extends Object{
    deserializeFromNetwork(in_: FriendlyByteBuf): T;
    serializeToJson(template: T, out: JsonObject): void;
    serializeToNetwork(template: T, out: FriendlyByteBuf): void;
    unpack(argument: A): T;
}