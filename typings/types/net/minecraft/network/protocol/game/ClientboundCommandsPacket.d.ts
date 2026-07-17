import type { RootCommandNode } from '../../../../../com/mojang/brigadier/tree/RootCommandNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundCommandsPacket$Entry } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$Entry.d.ts'
import type { ClientboundCommandsPacket$NodeBuilder } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeBuilder.d.ts'
import type { ClientboundCommandsPacket$NodeInspector } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeInspector.d.ts'
export class ClientboundCommandsPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundCommandsPacket>;
    constructor(root: RootCommandNode<Object>, inspector: ClientboundCommandsPacket$NodeInspector<Object>)
    // private entries: ClientboundCommandsPacket$Entry[];
    // private rootIndex: number;
    getRoot<S extends unknown>(context: CommandBuildContext, builder: ClientboundCommandsPacket$NodeBuilder<S>): RootCommandNode<S>;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundCommandsPacket>;
    // private write(output: FriendlyByteBuf): void;
}