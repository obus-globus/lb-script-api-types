import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { SystemReport } from '../../../../net/minecraft/SystemReport.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { LanServerPinger } from '../../../../net/minecraft/client/server/LanServerPinger.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { GlobalPos } from '../../../../net/minecraft/core/GlobalPos.d.ts'
import type { SimpleGizmoCollector } from '../../../../net/minecraft/gizmos/SimpleGizmoCollector.d.ts'
import type { SimpleGizmoCollector$GizmoInstance } from '../../../../net/minecraft/gizmos/SimpleGizmoCollector$GizmoInstance.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { Services } from '../../../../net/minecraft/server/Services.d.ts'
import type { WorldStem } from '../../../../net/minecraft/server/WorldStem.d.ts'
import type { LevelLoadListener } from '../../../../net/minecraft/server/level/progress/LevelLoadListener.d.ts'
import type { PackRepository } from '../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { LevelBasedPermissionSet } from '../../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { ModCheck } from '../../../../net/minecraft/util/ModCheck.d.ts'
import type { LocalSampleLogger } from '../../../../net/minecraft/util/debugchart/LocalSampleLogger.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelSettings } from '../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { WorldDataConfiguration } from '../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { RegionStorageInfo } from '../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { GameRules } from '../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class IntegratedServer extends MinecraftServer {
    static ABSOLUTE_MAX_WORLD_SIZE: number;
    static ANONYMOUS_PLAYER_PROFILE: NameAndId;
    static BLOCK_TIME_NANOS: number;
    static DEFAULT_GAME_RULES: () => GameRules;
    static DEMO_SETTINGS: LevelSettings;
    static MAX_PLAYERS: number;
    static NULL: CommandSource;
    static SPAWN_POSITION_SEARCH_RADIUS: number;
    static VANILLA_BRAND: string;
    static configurePackRepository(parampackRepository: PackRepository, paraminitialDataConfig: WorldDataConfiguration, paraminitMode: boolean, paramsafeMode: boolean): WorldDataConfiguration;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    static spin(paramfactory: (param0: Thread) => MinecraftServer | null): MinecraftServer | null;
    constructor(serverThread: Thread, minecraft: Minecraft, levelStorageAccess: LevelStorageSource$LevelStorageAccess, packRepository: PackRepository, worldStem: WorldStem, gameRules: Optional<GameRules>, services: Services, levelLoadListener: LevelLoadListener)
    // private gizmoCollector: SimpleGizmoCollector;
    // private lanPinger: LanServerPinger;
    // private latestTicksGizmos: SimpleGizmoCollector$GizmoInstance[];
    // private minecraft: Minecraft;
    readonly paused: boolean;
    // private previousSimulationDistance: number;
    // private publishedGameType: GameType;
    // private publishedPort: number;
    // private uuid: UUID;
    fillServerSystemReport(systemReport: SystemReport): SystemReport;
    forceSynchronousWrites(): boolean;
    getForcedGameType(): GameType;
    getFunctionCompilationPermissions(): LevelBasedPermissionSet;
    getMaxPlayers(): number;
    getModdedStatus(): ModCheck;
    getPerTickGizmos(): SimpleGizmoCollector$GizmoInstance[];
    getPort(): number;
    getRateLimitPacketsPerSecond(): number;
    getScaledTrackingDistance(baseRange: number): number;
    getServerDirectory(): Path[];
    getTickTimeLogger(): LocalSampleLogger;
    halt(wait: boolean): void;
    initServer(): boolean;
    isDedicatedServer(): boolean;
    isPaused(): boolean;
    isPublished(): boolean;
    isSingleplayerOwner(nameAndId: NameAndId): boolean;
    isTickTimeLoggingEnabled(): boolean;
    onServerCrash(report: CrashReport): void;
    operatorUserPermissions(): LevelBasedPermissionSet;
    processPacketsAndTick(sprinting: boolean): void;
    publishServer(gameMode: GameType, allowCommands: boolean, port: number): boolean;
    reportChunkLoadFailure(throwable: Throwable, storageInfo: RegionStorageInfo, pos: ChunkPos): void;
    reportChunkSaveFailure(throwable: Throwable, storageInfo: RegionStorageInfo, pos: ChunkPos): void;
    selectLevelLoadFocusPos(): GlobalPos;
    sendLowDiskSpaceWarning(): void;
    setDefaultGameType(gameType: GameType): void;
    setUUID(uuid: UUID): void;
    shouldInformAdmins(): boolean;
    shouldRconBroadcast(): boolean;
    stopServer(): void;
    // private tickPaused(): void;
    tickServer(haveTime: () => boolean): void;
    useNativeTransport(): boolean;
}