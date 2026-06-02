import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { FloatArgumentType } from '../../../../../com/mojang/brigadier/arguments/FloatArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FloatArgumentInfo$Template } from '../../../../../net/minecraft/commands/synchronization/brigadier/FloatArgumentInfo$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class FloatArgumentInfo extends Object implements ArgumentTypeInfo<FloatArgumentType, FloatArgumentInfo$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): FloatArgumentInfo$Template;
    serializeToJson(template: FloatArgumentInfo$Template, out: JsonObject): void;
    serializeToNetwork(template: FloatArgumentInfo$Template, out: FriendlyByteBuf): void;
    unpack(argument: FloatArgumentType): FloatArgumentInfo$Template;
}