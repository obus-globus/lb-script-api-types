import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { IntegerArgumentType } from '../../../../../com/mojang/brigadier/arguments/IntegerArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { IntegerArgumentInfo$Template } from '../../../../../net/minecraft/commands/synchronization/brigadier/IntegerArgumentInfo$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class IntegerArgumentInfo extends Object implements ArgumentTypeInfo<IntegerArgumentType, IntegerArgumentInfo$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): IntegerArgumentInfo$Template;
    serializeToJson(template: IntegerArgumentInfo$Template, out: JsonObject): void;
    serializeToNetwork(template: IntegerArgumentInfo$Template, out: FriendlyByteBuf): void;
    unpack(argument: IntegerArgumentType): IntegerArgumentInfo$Template;
}