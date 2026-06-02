import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceOrTagArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrTagArgument.d.ts'
import type { ResourceOrTagArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/ResourceOrTagArgument$Info$Template.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class ResourceOrTagArgument$Info<T extends Object | number | string | boolean> extends Object implements ArgumentTypeInfo<ResourceOrTagArgument<T>, ResourceOrTagArgument$Info$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): ResourceOrTagArgument$Info$Template;
    serializeToJson(template: ResourceOrTagArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: ResourceOrTagArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: ResourceOrTagArgument<T>): ResourceOrTagArgument$Info$Template;
}