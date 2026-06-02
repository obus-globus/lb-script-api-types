import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundPlayerInfoRemovePacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundPlayerInfoRemovePacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(profileIds: UUID[])
    private constructor(input: FriendlyByteBuf)
    // private profileIds: UUID[];
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    profileIds(): UUID[];
    toString(): string;
    type(): PacketType<ClientboundPlayerInfoRemovePacket>;
    // private write(output: FriendlyByteBuf): void;
}