import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { LongArgumentType } from '../../../../../com/mojang/brigadier/arguments/LongArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { LongArgumentInfo$Template } from '../../../../../net/minecraft/commands/synchronization/brigadier/LongArgumentInfo$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class LongArgumentInfo extends Object implements ArgumentTypeInfo<LongArgumentType, LongArgumentInfo$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): LongArgumentInfo$Template;
    serializeToJson(template: LongArgumentInfo$Template, out: JsonObject): void;
    serializeToNetwork(template: LongArgumentInfo$Template, out: FriendlyByteBuf): void;
    unpack(argument: LongArgumentType): LongArgumentInfo$Template;
}