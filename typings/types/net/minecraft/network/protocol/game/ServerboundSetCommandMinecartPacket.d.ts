import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { BaseCommandBlock } from '../../../../../net/minecraft/world/level/BaseCommandBlock.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class ServerboundSetCommandMinecartPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSetCommandMinecartPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(entity: number, command: string, trackOutput: boolean)
    readonly command: string;
    // private entity: number;
    readonly trackOutput: boolean;
    getCommand(): string;
    getCommandBlock(level: Level): BaseCommandBlock;
    handle(listener: ServerGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    isTrackOutput(): boolean;
    type(): PacketType<ServerboundSetCommandMinecartPacket>;
    // private write(output: FriendlyByteBuf): void;
}