import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { StringArgumentType } from '../../../../../com/mojang/brigadier/arguments/StringArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { StringArgumentSerializer$Template } from '../../../../../net/minecraft/commands/synchronization/brigadier/StringArgumentSerializer$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class StringArgumentSerializer extends Object implements ArgumentTypeInfo<StringArgumentType, StringArgumentSerializer$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): StringArgumentSerializer$Template;
    serializeToJson(template: StringArgumentSerializer$Template, out: JsonObject): void;
    serializeToNetwork(template: StringArgumentSerializer$Template, out: FriendlyByteBuf): void;
    unpack(argument: StringArgumentType): StringArgumentSerializer$Template;
}