import type { CommandNode } from '../../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ClientboundCommandsPacket$Entry } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$Entry.d.ts'
import type { ClientboundCommandsPacket$NodeBuilder } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeBuilder.d.ts'
export class ClientboundCommandsPacket$NodeResolver<S extends unknown> extends Object {
    private constructor(context: CommandBuildContext, builder: ClientboundCommandsPacket$NodeBuilder<S>, entries: ClientboundCommandsPacket$Entry[])
    // private builder: ClientboundCommandsPacket$NodeBuilder<S>;
    // private context: CommandBuildContext;
    // private entries: ClientboundCommandsPacket$Entry[];
    // private nodes: CommandNode<S>[];
    resolve(index: number): CommandNode<S>;
}