import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TimeArgument } from '../../../../net/minecraft/commands/arguments/TimeArgument.d.ts'
import type { TimeArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/TimeArgument$Info$Template.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class TimeArgument$Info extends Object implements ArgumentTypeInfo<TimeArgument, TimeArgument$Info$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): TimeArgument$Info$Template;
    serializeToJson(template: TimeArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: TimeArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: TimeArgument): TimeArgument$Info$Template;
}