import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundClearTitlesPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundClearTitlesPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(resetTimes: boolean)
    private constructor(input: FriendlyByteBuf)
    // private resetTimes: boolean;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    shouldResetTimes(): boolean;
    type(): PacketType<ClientboundClearTitlesPacket>;
    // private write(output: FriendlyByteBuf): void;
}