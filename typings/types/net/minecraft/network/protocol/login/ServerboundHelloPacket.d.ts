import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ServerLoginPacketListener.d.ts'
export class ServerboundHelloPacket extends Record implements Packet<ServerLoginPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundHelloPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(name: string, profileId: UUID)
    // private name: string;
    // private profileId: UUID;
    equals(o: Object | null): boolean;
    handle(listener: ServerLoginPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    name(): string;
    profileId(): UUID;
    toString(): string;
    type(): PacketType<ServerboundHelloPacket>;
    // private write(output: FriendlyByteBuf): void;
}