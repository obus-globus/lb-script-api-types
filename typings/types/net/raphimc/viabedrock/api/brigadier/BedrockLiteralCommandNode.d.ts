import type { LiteralCommandNode } from '../../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData.d.ts'
export class BedrockLiteralCommandNode<S extends unknown> extends LiteralCommandNode<S> {
    constructor(arg0: CommandData, arg1: LiteralCommandNode<S>)
    readonly commandData: CommandData;
    getCommandData(): CommandData;
}