import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Environment } from '../../../../../net/minecraft/util/profiling/jfr/Environment.d.ts'
import type { ProfiledDuration } from '../../../../../net/minecraft/util/profiling/jfr/callback/ProfiledDuration.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { RegionFileVersion } from '../../../../../net/minecraft/world/level/chunk/storage/RegionFileVersion.d.ts'
import type { RegionStorageInfo } from '../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export interface JvmProfiler extends Object {
    isAvailable(): boolean;
    isRunning(): boolean;
    onChunkGenerate(pos: ChunkPos, dimension: ResourceKey<Level>, name: string): (param0: boolean) => void;
    onClientTick(fps: number): void;
    onPacketReceived(protocol: ConnectionProtocol, packetId: PacketType<Object>, remoteAddress: SocketAddress, readableBytes: number): void;
    onPacketSent(protocol: ConnectionProtocol, packetId: PacketType<Object>, remoteAddress: SocketAddress, writtenBytes: number): void;
    onRegionFileRead(info: RegionStorageInfo, pos: ChunkPos, version: RegionFileVersion, readBytes: number): void;
    onRegionFileWrite(info: RegionStorageInfo, pos: ChunkPos, version: RegionFileVersion, writtenBytes: number): void;
    onServerTick(averageTickTime: number): void;
    onStructureGenerate(sourceChunkPos: ChunkPos, dimension: ResourceKey<Level>, structure: Holder<Structure>): (param0: boolean) => void;
    onWorldLoadedStarted(): (param0: boolean) => void;
    start(environment: Environment): boolean;
    stop(): Path[];
}