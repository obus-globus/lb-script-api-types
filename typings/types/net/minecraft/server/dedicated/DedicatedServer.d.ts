import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { SystemReport } from '../../../../net/minecraft/SystemReport.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ConsoleInput } from '../../../../net/minecraft/server/ConsoleInput.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { MinecraftServer$ServerResourcePackInfo } from '../../../../net/minecraft/server/MinecraftServer$ServerResourcePackInfo.d.ts'
import type { ServerInterface } from '../../../../net/minecraft/server/ServerInterface.d.ts'
import type { ServerLinks } from '../../../../net/minecraft/server/ServerLinks.d.ts'
import type { Services } from '../../../../net/minecraft/server/Services.d.ts'
import type { WorldStem } from '../../../../net/minecraft/server/WorldStem.d.ts'
import type { DedicatedPlayerList } from '../../../../net/minecraft/server/dedicated/DedicatedPlayerList.d.ts'
import type { DedicatedServerProperties } from '../../../../net/minecraft/server/dedicated/DedicatedServerProperties.d.ts'
import type { DedicatedServerSettings } from '../../../../net/minecraft/server/dedicated/DedicatedServerSettings.d.ts'
import type { MinecraftServerGui } from '../../../../net/minecraft/server/gui/MinecraftServerGui.d.ts'
import type { ManagementServer } from '../../../../net/minecraft/server/jsonrpc/ManagementServer.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ServerTextFilter } from '../../../../net/minecraft/server/network/ServerTextFilter.d.ts'
import type { TextFilter } from '../../../../net/minecraft/server/network/TextFilter.d.ts'
import type { PackRepository } from '../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { LevelBasedPermissionSet } from '../../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { RconConsoleSource } from '../../../../net/minecraft/server/rcon/RconConsoleSource.d.ts'
import type { QueryThreadGs4 } from '../../../../net/minecraft/server/rcon/thread/QueryThreadGs4.d.ts'
import type { RconThread } from '../../../../net/minecraft/server/rcon/thread/RconThread.d.ts'
import type { RemoteSampleLogger } from '../../../../net/minecraft/util/debugchart/RemoteSampleLogger.d.ts'
import type { SampleLogger } from '../../../../net/minecraft/util/debugchart/SampleLogger.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelSettings } from '../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { WorldDataConfiguration } from '../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { GameRules } from '../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class DedicatedServer extends MinecraftServer implements ServerInterface {
    static ABSOLUTE_MAX_WORLD_SIZE: number;
    static ANONYMOUS_PLAYER_PROFILE: NameAndId;
    static BLOCK_TIME_NANOS: number;
    static DEFAULT_GAME_RULES: () => GameRules;
    static DEMO_SETTINGS: LevelSettings;
    static NULL: CommandSource;
    static SPAWN_POSITION_SEARCH_RADIUS: number;
    static VANILLA_BRAND: string;
    static configurePackRepository(parampackRepository: PackRepository, paraminitialDataConfig: WorldDataConfiguration, paraminitMode: boolean, paramsafeMode: boolean): WorldDataConfiguration;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    static spin(paramfactory: (param0: Thread) => MinecraftServer | null): MinecraftServer | null;
    constructor(serverThread: Thread, levelStorageSource: LevelStorageSource$LevelStorageAccess, packRepository: PackRepository, worldStem: WorldStem, gameRules: Optional<GameRules>, settings: DedicatedServerSettings, fixerUpper: DataFixer, services: Services)
    // private codeOfConductTexts: { [key: string]: string };
    // private consoleInput: ConsoleInput[];
    // private gui: MinecraftServerGui;
    // private isTickTimeLoggingEnabled: boolean;
    // private jsonRpcServer: ManagementServer;
    // private lastHeartbeat: number;
    // private queryThreadGs4: QueryThreadGs4;
    // private rconConsoleSource: RconConsoleSource;
    // private rconThread: RconThread;
    // private serverLinks: ServerLinks;
    // private serverTextFilter: ServerTextFilter;
    // private settings: DedicatedServerSettings;
    // private tickTimeLogger: RemoteSampleLogger;
    acceptsTransfers(): boolean;
    allowFlight(): boolean;
    convertOldUsers(): boolean;
    // private createSslContext(): SslContext;
    createTextFilterForPlayer(player: ServerPlayer): TextFilter;
    dumpServerProperties(path: Path[]): void;
    endMetricsRecordingTick(): void;
    enforceSecureProfile(): boolean;
    entityBroadcastRangePercentage(): number;
    fillServerSystemReport(systemReport: SystemReport): SystemReport;
    forceDifficulty(): void;
    forceGameMode(): boolean;
    forceSynchronousWrites(): boolean;
    gameMode(): GameType;
    getAbsoluteMaxWorldSize(): number;
    getCodeOfConducts(): { [key: string]: string };
    getCompressionThreshold(): number;
    getForcedGameType(): GameType;
    getFunctionCompilationPermissions(): PermissionSet;
    getLevelIdName(): string;
    getMaxChainedNeighborUpdates(): number;
    getMaxPlayers(): number;
    getMaxTickLength(): number;
    getMotd(): string;
    getPlayerList(): DedicatedPlayerList;
    getPluginNames(): string;
    getProperties(): DedicatedServerProperties;
    getRateLimitPacketsPerSecond(): number;
    getScaledTrackingDistance(range: number): number;
    getServerIp(): string;
    getServerName(): string;
    getServerPort(): number;
    getServerResourcePack(): Optional<MinecraftServer$ServerResourcePackInfo>;
    getTickTimeLogger(): SampleLogger;
    handleConsoleInput(msg: string, source: CommandSourceStack): void;
    handleConsoleInputs(): void;
    hidesOnlinePlayers(): boolean;
    initServer(): boolean;
    isDedicatedServer(): boolean;
    isEnforceWhitelist(): boolean;
    isPublished(): boolean;
    isSingleplayerOwner(nameAndId: NameAndId): boolean;
    isTickTimeLoggingEnabled(): boolean;
    isUnderSpawnProtection(level: ServerLevel, pos: BlockPos, player: Player): boolean;
    isUsingWhitelist(): boolean;
    logIPs(): boolean;
    onServerExit(): void;
    operatorUserPermissions(): LevelBasedPermissionSet;
    pauseWhenEmptySeconds(): number;
    playerIdleTimeout(): number;
    repliesToStatus(): boolean;
    runCommand(command: string): string;
    saveAllChunks(silent: boolean, flush: boolean, force: boolean): boolean;
    sendLowDiskSpaceWarning(): void;
    serverLinks(): ServerLinks;
    setAcceptsTransfers(acceptTransfers: boolean): void;
    setAllowFlight(allowed: boolean): void;
    setDifficulty(difficulty: Difficulty): void;
    setDifficulty(difficulty: Difficulty, ignoreLock: boolean): void;
    setEnforceWhitelist(enforceWhitelist: boolean): void;
    setEntityBroadcastRangePercentage(range: number): void;
    setForceGameMode(forceGameMode: boolean): void;
    setGameMode(gameMode: GameType): void;
    setHidesOnlinePlayers(hide: boolean): void;
    setMaxPlayers(maxPlayers: number): void;
    setMotd(motd: string): void;
    setOperatorUserPermissions(permissions: LevelBasedPermissionSet): void;
    setPauseWhenEmptySeconds(seconds: number): void;
    setPlayerIdleTimeout(playerIdleTimeout: number): void;
    setRepliesToStatus(enable: boolean): void;
    setSimulationDistance(simulationDistance: number): void;
    setSpawnProtectionRadius(spawnProtectionRadius: number): void;
    setStatusHeartbeatInterval(statusHeartbeatInterval: number): void;
    setUsingWhitelist(usingWhitelist: boolean): void;
    setViewDistance(viewDistance: number): void;
    shouldInformAdmins(): boolean;
    shouldRconBroadcast(): boolean;
    showGui(): void;
    simulationDistance(): number;
    spawnProtectionRadius(): number;
    statusHeartbeatInterval(): number;
    stopServer(): void;
    tickConnection(): void;
    tickServer(haveTime: () => boolean): void;
    useNativeTransport(): boolean;
    viewDistance(): number;
    // private waitForRetry(): void;
}