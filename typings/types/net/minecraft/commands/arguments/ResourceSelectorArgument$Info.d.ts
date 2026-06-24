import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceSelectorArgument } from '../../../../net/minecraft/commands/arguments/ResourceSelectorArgument.d.ts'
import type { ResourceSelectorArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/ResourceSelectorArgument$Info$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class ResourceSelectorArgument$Info<T extends unknown>{
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): ResourceSelectorArgument$Info$Template;
    serializeToJson(template: ResourceSelectorArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: ResourceSelectorArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: ResourceSelectorArgument<T>): ResourceSelectorArgument$Info$Template;
}