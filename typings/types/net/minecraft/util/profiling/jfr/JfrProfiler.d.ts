import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Recording } from '../../../../../jdk/jfr/Recording.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Environment } from '../../../../../net/minecraft/util/profiling/jfr/Environment.d.ts'
import type { JvmProfiler } from '../../../../../net/minecraft/util/profiling/jfr/JvmProfiler.d.ts'
import type { ProfiledDuration } from '../../../../../net/minecraft/util/profiling/jfr/callback/ProfiledDuration.d.ts'
import type { NetworkSummaryEvent$SumAggregation } from '../../../../../net/minecraft/util/profiling/jfr/event/NetworkSummaryEvent$SumAggregation.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { RegionFileVersion } from '../../../../../net/minecraft/world/level/chunk/storage/RegionFileVersion.d.ts'
import type { RegionStorageInfo } from '../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export class JfrProfiler extends Object implements JvmProfiler {
    static INSTANCE: JvmProfiler;
    static NETWORK_CATEGORY: string;
    static ROOT_CATEGORY: string;
    static STORAGE_CATEGORY: string;
    static TICK_CATEGORY: string;
    static WORLD_GEN_CATEGORY: string;
    static getInstance(): JfrProfiler;
    private constructor()
    // private currentAverageTickTimeServer: number;
    // private currentFPS: number;
    // private networkTrafficByAddress: { [key: string]: NetworkSummaryEvent$SumAggregation };
    // private periodicClientFps: () => void;
    // private periodicNetworkSummary: () => void;
    // private periodicServerTickTime: () => void;
    // private recording: Recording;
    isAvailable(): boolean;
    isRunning(): boolean;
    // private networkStatFor(remoteAddress: SocketAddress): NetworkSummaryEvent$SumAggregation;
    onChunkGenerate(pos: ChunkPos, dimension: ResourceKey<Level>, name: string): (param0: boolean) => void;
    onClientTick(fps: number): void;
    onPacketReceived(protocol: ConnectionProtocol, packetId: PacketType<any>, remoteAddress: SocketAddress, readableBytes: number): void;
    onPacketSent(protocol: ConnectionProtocol, packetId: PacketType<any>, remoteAddress: SocketAddress, writtenBytes: number): void;
    onRegionFileRead(info: RegionStorageInfo, pos: ChunkPos, version: RegionFileVersion, readBytes: number): void;
    onRegionFileWrite(info: RegionStorageInfo, pos: ChunkPos, version: RegionFileVersion, writtenBytes: number): void;
    onServerTick(currentAverageTickTime: number): void;
    onStructureGenerate(sourceChunkPos: ChunkPos, dimension: ResourceKey<Level>, structure: Holder<Structure>): (param0: boolean) => void;
    onWorldLoadedStarted(): (param0: boolean) => void;
    // private registerPeriodicEvents(): void;
    // private setupSummaryListener(): void;
    // private start(configurationFile: Reader, environment: Environment): boolean;
    start(environment: Environment): boolean;
    stop(): Path[];
}