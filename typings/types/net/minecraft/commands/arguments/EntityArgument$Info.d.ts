import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityArgument } from '../../../../net/minecraft/commands/arguments/EntityArgument.d.ts'
import type { EntityArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/EntityArgument$Info$Template.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class EntityArgument$Info extends Object implements ArgumentTypeInfo<EntityArgument, EntityArgument$Info$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): EntityArgument$Info$Template;
    serializeToJson(template: EntityArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: EntityArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: EntityArgument): EntityArgument$Info$Template;
}