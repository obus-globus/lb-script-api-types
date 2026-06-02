import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { DoubleArgumentType } from '../../../../../com/mojang/brigadier/arguments/DoubleArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { DoubleArgumentInfo$Template } from '../../../../../net/minecraft/commands/synchronization/brigadier/DoubleArgumentInfo$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class DoubleArgumentInfo extends Object implements ArgumentTypeInfo<DoubleArgumentType, DoubleArgumentInfo$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): DoubleArgumentInfo$Template;
    serializeToJson(template: DoubleArgumentInfo$Template, out: JsonObject): void;
    serializeToNetwork(template: DoubleArgumentInfo$Template, out: FriendlyByteBuf): void;
    unpack(argument: DoubleArgumentType): DoubleArgumentInfo$Template;
}