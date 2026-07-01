import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundLevelChunkPacketData } from '../../../../../net/minecraft/network/protocol/game/ClientboundLevelChunkPacketData.d.ts'
import type { ClientboundLightUpdatePacketData } from '../../../../../net/minecraft/network/protocol/game/ClientboundLightUpdatePacketData.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
export class ClientboundLevelChunkWithLightPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundLevelChunkWithLightPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(levelChunk: LevelChunk, lightEngine: LevelLightEngine, skyChangedLightSectionFilter: BitSet, blockChangedLightSectionFilter: BitSet)
    readonly chunkData: ClientboundLevelChunkPacketData;
    readonly lightData: ClientboundLightUpdatePacketData;
    readonly x: number;
    readonly z: number;
    getChunkData(): ClientboundLevelChunkPacketData;
    getLightData(): ClientboundLightUpdatePacketData;
    getX(): number;
    getZ(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundLevelChunkWithLightPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}