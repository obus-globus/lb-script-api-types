import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { CommonPlayerSpawnInfo } from '../../../../../net/minecraft/network/protocol/game/CommonPlayerSpawnInfo.d.ts'
export class ClientboundRespawnPacket extends Record implements Packet<ClientGamePacketListener> {
    static KEEP_ALL_DATA: number;
    static KEEP_ATTRIBUTE_MODIFIERS: number;
    static KEEP_ENTITY_DATA: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundRespawnPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    private constructor(input: RegistryFriendlyByteBuf)
    constructor(commonPlayerSpawnInfo: CommonPlayerSpawnInfo, dataToKeep: number)
    // private commonPlayerSpawnInfo: CommonPlayerSpawnInfo;
    // private dataToKeep: number;
    commonPlayerSpawnInfo(): CommonPlayerSpawnInfo;
    dataToKeep(): number;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    shouldKeep(mask: number): boolean;
    toString(): string;
    type(): PacketType<ClientboundRespawnPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}