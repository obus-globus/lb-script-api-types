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
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class ClientboundLoginPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundLoginPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    // private chunkRadius: number;
    // private commonPlayerSpawnInfo: CommonPlayerSpawnInfo;
    // private doLimitedCrafting: boolean;
    // private enforcesSecureChat: boolean;
    // private hardcore: boolean;
    // private levels: ResourceKey<Level>[];
    // private maxPlayers: number;
    // private playerId: number;
    // private reducedDebugInfo: boolean;
    // private showDeathScreen: boolean;
    // private simulationDistance: number;
    chunkRadius(): number;
    commonPlayerSpawnInfo(): CommonPlayerSpawnInfo;
    doLimitedCrafting(): boolean;
    enforcesSecureChat(): boolean;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hardcore(): boolean;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    levels(): ResourceKey<Level>[];
    maxPlayers(): number;
    playerId(): number;
    reducedDebugInfo(): boolean;
    showDeathScreen(): boolean;
    simulationDistance(): number;
    toString(): string;
    type(): PacketType<ClientboundLoginPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}