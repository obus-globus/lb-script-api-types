import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceArgument } from '../../../../net/minecraft/commands/arguments/ResourceArgument.d.ts'
import type { ResourceArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/ResourceArgument$Info$Template.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class ResourceArgument$Info<T extends unknown> extends Object implements ArgumentTypeInfo<ResourceArgument<T>, ResourceArgument$Info$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): ResourceArgument$Info$Template;
    serializeToJson(template: ResourceArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: ResourceArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: ResourceArgument<T>): ResourceArgument$Info$Template;
}