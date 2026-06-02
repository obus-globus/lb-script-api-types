import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundSetTitlesAnimationPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundSetTitlesAnimationPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(fadeIn: number, stay: number, fadeOut: number)
    private constructor(input: FriendlyByteBuf)
    readonly fadeIn: number;
    readonly fadeOut: number;
    readonly stay: number;
    getFadeIn(): number;
    getFadeOut(): number;
    getStay(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundSetTitlesAnimationPacket>;
    // private write(output: FriendlyByteBuf): void;
}