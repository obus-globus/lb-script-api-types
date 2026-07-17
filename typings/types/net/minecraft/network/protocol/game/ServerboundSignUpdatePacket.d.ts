import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
export class ServerboundSignUpdatePacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSignUpdatePacket>;
    constructor(pos: BlockPos, isFrontText: boolean, line0: string, line1: string, line2: string, line3: string)
    // private isFrontText: boolean;
    readonly lines: string[];
    readonly pos: BlockPos;
    getLines(): string[];
    getPos(): BlockPos;
    handle(listener: ServerGamePacketListener): void;
    isFrontText(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundSignUpdatePacket>;
    // private write(output: FriendlyByteBuf): void;
}