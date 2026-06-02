import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ScoreHolderArgument } from '../../../../net/minecraft/commands/arguments/ScoreHolderArgument.d.ts'
import type { ScoreHolderArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/ScoreHolderArgument$Info$Template.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class ScoreHolderArgument$Info extends Object implements ArgumentTypeInfo<ScoreHolderArgument, ScoreHolderArgument$Info$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): ScoreHolderArgument$Info$Template;
    serializeToJson(template: ScoreHolderArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: ScoreHolderArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: ScoreHolderArgument): ScoreHolderArgument$Info$Template;
}