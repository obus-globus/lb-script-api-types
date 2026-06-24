import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ClientLoginPacketListener.d.ts'
export class ClientboundLoginFinishedPacket extends Record implements Packet<ClientLoginPacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundLoginFinishedPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(gameProfile: GameProfile, sessionId: UUID)
    // private gameProfile: GameProfile;
    // private sessionId: UUID;
    equals(o: Object | null): boolean;
    gameProfile(): GameProfile;
    handle(listener: ClientLoginPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    sessionId(): UUID;
    toString(): string;
    type(): PacketType<ClientboundLoginFinishedPacket>;
}