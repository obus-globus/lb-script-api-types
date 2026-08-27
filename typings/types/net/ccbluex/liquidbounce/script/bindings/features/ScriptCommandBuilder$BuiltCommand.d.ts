import type { LiteralCommandNode } from '../../../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
export class ScriptCommandBuilder$BuiltCommand extends Object {
    constructor(mainNode: LiteralCommandNode<ClientCommandSource>, allNodes: LiteralCommandNode<ClientCommandSource>[])
    readonly allNodes: LiteralCommandNode<ClientCommandSource>[];
    readonly mainNode: LiteralCommandNode<ClientCommandSource>;
    component1(): LiteralCommandNode<ClientCommandSource>;
    component2(): LiteralCommandNode<ClientCommandSource>[];
    copy(mainNode: LiteralCommandNode<ClientCommandSource>, allNodes: LiteralCommandNode<ClientCommandSource>[]): ScriptCommandBuilder$BuiltCommand;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}