import type { PublicKey } from '../../../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ClientLoginPacketListener.d.ts'
export class ClientboundHelloPacket extends Object implements Packet<ClientLoginPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundHelloPacket>;
    constructor(serverId: string, publicKey: number[], challenge: number[], shouldAuthenticate: boolean)
    readonly challenge: number[];
    readonly publicKey: number[];
    readonly serverId: string;
    // private shouldAuthenticate: boolean;
    getChallenge(): number[];
    getPublicKey(): PublicKey;
    getServerId(): string;
    handle(listener: ClientLoginPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    shouldAuthenticate(): boolean;
    type(): PacketType<ClientboundHelloPacket>;
    // private write(output: FriendlyByteBuf): void;
}