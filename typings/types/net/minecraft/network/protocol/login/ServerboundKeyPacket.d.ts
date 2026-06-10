import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { PrivateKey } from '../../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../../java/security/PublicKey.d.ts'
import type { SecretKey } from '../../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ServerLoginPacketListener.d.ts'
export class ServerboundKeyPacket extends Object implements Packet<ServerLoginPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundKeyPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(secretKey: SecretKey, publicKey: PublicKey, challenge: number[])
    private constructor(input: FriendlyByteBuf)
    // private encryptedChallenge: number[];
    // private keybytes: number[];
    getSecretKey(privateKey: PrivateKey): SecretKey;
    handle(listener: ServerLoginPacketListener): void;
    isChallengeValid(challenge: number[], privateKey: PrivateKey): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundKeyPacket>;
    // private write(output: FriendlyByteBuf): void;
}