import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundPlayerActionPacket$Action } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlayerActionPacket$Action.d.ts'
export class ServerboundPlayerActionPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundPlayerActionPacket>;
    constructor(action: ServerboundPlayerActionPacket$Action, pos: BlockPos, direction: Direction)
    constructor(action: ServerboundPlayerActionPacket$Action, pos: BlockPos, direction: Direction, sequence: number)
    readonly action: ServerboundPlayerActionPacket$Action;
    readonly direction: Direction;
    readonly pos: BlockPos;
    readonly sequence: number;
    getAction(): ServerboundPlayerActionPacket$Action;
    getDirection(): Direction;
    getPos(): BlockPos;
    getSequence(): number;
    handle(listener: ServerGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundPlayerActionPacket>;
    // private write(output: FriendlyByteBuf): void;
}