import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { ClientInformation } from '../../../../../net/minecraft/server/level/ClientInformation.d.ts'
export class ServerboundClientInformationPacket extends Record implements Packet<ServerCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundClientInformationPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    private constructor(input: FriendlyByteBuf)
    constructor(information: ClientInformation)
    // private information: ClientInformation;
    equals(o: Object | null): boolean;
    handle(listener: ServerCommonPacketListener): void;
    hashCode(): number;
    information(): ClientInformation;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ServerboundClientInformationPacket>;
    // private write(output: FriendlyByteBuf): void;
}