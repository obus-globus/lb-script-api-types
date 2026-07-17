import type { JavaMap } from '../../../JavaMap.d.ts'
import type { GameProfile } from '../../../com/mojang/authlib/GameProfile.d.ts'
import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { DiscontinuousFrame } from '../../../com/mojang/jtracy/DiscontinuousFrame.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { KeyPair } from '../../../java/security/KeyPair.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { BooleanSupplier } from '../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { GlobalAttachments } from '../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachments.d.ts'
import type { GlobalAttachmentsProvider } from '../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachmentsProvider.d.ts'
import type { DataResourceStore } from '../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore.d.ts'
import type { DataResourceStore$Key } from '../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Key.d.ts'
import type { GlobalAttachmentsImpl } from '../../../net/fabricmc/fabric/impl/attachment/GlobalAttachmentsImpl.d.ts'
import type { MinecraftServerHooks } from '../../../net/fabricmc/fabric/impl/event/lifecycle/MinecraftServerHooks.d.ts'
import type { FabricOriginalKnownPacksGetter } from '../../../net/fabricmc/fabric/impl/resource/pack/FabricOriginalKnownPacksGetter.d.ts'
import type { CrashReport } from '../../../net/minecraft/CrashReport.d.ts'
import type { SystemReport } from '../../../net/minecraft/SystemReport.d.ts'
import type { CommandSource } from '../../../net/minecraft/commands/CommandSource.d.ts'
import type { CommandSourceStack } from '../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Commands } from '../../../net/minecraft/commands/Commands.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { GlobalPos } from '../../../net/minecraft/core/GlobalPos.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { PacketProcessor } from '../../../net/minecraft/network/PacketProcessor.d.ts'
import type { ChatDecorator } from '../../../net/minecraft/network/chat/ChatDecorator.d.ts'
import type { ChatType$Bound } from '../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { PacketType } from '../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerStatus } from '../../../net/minecraft/network/protocol/status/ServerStatus.d.ts'
import type { ServerStatus$Favicon } from '../../../net/minecraft/network/protocol/status/ServerStatus$Favicon.d.ts'
import type { ServerStatus$Players } from '../../../net/minecraft/network/protocol/status/ServerStatus$Players.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer$MultiplayerScope } from '../../../net/minecraft/server/MinecraftServer$MultiplayerScope.d.ts'
import type { MinecraftServer$ReloadableResources } from '../../../net/minecraft/server/MinecraftServer$ReloadableResources.d.ts'
import type { MinecraftServer$ServerResourcePackInfo } from '../../../net/minecraft/server/MinecraftServer$ServerResourcePackInfo.d.ts'
import type { MinecraftServer$TimeProfiler } from '../../../net/minecraft/server/MinecraftServer$TimeProfiler.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerRegistries$Holder } from '../../../net/minecraft/server/ReloadableServerRegistries$Holder.d.ts'
import type { ServerAdvancementManager } from '../../../net/minecraft/server/ServerAdvancementManager.d.ts'
import type { ServerFunctionManager } from '../../../net/minecraft/server/ServerFunctionManager.d.ts'
import type { ServerInfo } from '../../../net/minecraft/server/ServerInfo.d.ts'
import type { ServerLinks } from '../../../net/minecraft/server/ServerLinks.d.ts'
import type { ServerScoreboard } from '../../../net/minecraft/server/ServerScoreboard.d.ts'
import type { ServerTickRateManager } from '../../../net/minecraft/server/ServerTickRateManager.d.ts'
import type { Services } from '../../../net/minecraft/server/Services.d.ts'
import type { SuppressedExceptionCollector } from '../../../net/minecraft/server/SuppressedExceptionCollector.d.ts'
import type { TickTask } from '../../../net/minecraft/server/TickTask.d.ts'
import type { WorldStem } from '../../../net/minecraft/server/WorldStem.d.ts'
import type { CustomBossEvents } from '../../../net/minecraft/server/bossevents/CustomBossEvents.d.ts'
import type { ServerLevel } from '../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ServerPlayerGameMode } from '../../../net/minecraft/server/level/ServerPlayerGameMode.d.ts'
import type { ChunkLoadStatusView } from '../../../net/minecraft/server/level/progress/ChunkLoadStatusView.d.ts'
import type { LevelLoadListener } from '../../../net/minecraft/server/level/progress/LevelLoadListener.d.ts'
import type { ServerConnectionListener } from '../../../net/minecraft/server/network/ServerConnectionListener.d.ts'
import type { TextFilter } from '../../../net/minecraft/server/network/TextFilter.d.ts'
import type { NotificationManager } from '../../../net/minecraft/server/notifications/NotificationManager.d.ts'
import type { ServerActivityMonitor } from '../../../net/minecraft/server/notifications/ServerActivityMonitor.d.ts'
import type { PackRepository } from '../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { LevelBasedPermissionSet } from '../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { PermissionSet } from '../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { NameAndId } from '../../../net/minecraft/server/players/NameAndId.d.ts'
import type { PlayerList } from '../../../net/minecraft/server/players/PlayerList.d.ts'
import type { ModCheck } from '../../../net/minecraft/util/ModCheck.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { ServerDebugSubscribers } from '../../../net/minecraft/util/debug/ServerDebugSubscribers.d.ts'
import type { SampleLogger } from '../../../net/minecraft/util/debugchart/SampleLogger.d.ts'
import type { ProfileResults } from '../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { ProfilerFiller } from '../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { MetricsRecorder } from '../../../net/minecraft/util/profiling/metrics/profiling/MetricsRecorder.d.ts'
import type { ReentrantBlockableEventLoop } from '../../../net/minecraft/util/thread/ReentrantBlockableEventLoop.d.ts'
import type { Difficulty } from '../../../net/minecraft/world/Difficulty.d.ts'
import type { RandomSequences } from '../../../net/minecraft/world/RandomSequences.d.ts'
import type { Stopwatches } from '../../../net/minecraft/world/Stopwatches.d.ts'
import type { ServerClockManager } from '../../../net/minecraft/world/clock/ServerClockManager.d.ts'
import type { Player } from '../../../net/minecraft/world/entity/player/Player.d.ts'
import type { PotionBrewing } from '../../../net/minecraft/world/item/alchemy/PotionBrewing.d.ts'
import type { RecipeManager } from '../../../net/minecraft/world/item/crafting/RecipeManager.d.ts'
import type { ChunkPos } from '../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { GameType } from '../../../net/minecraft/world/level/GameType.d.ts'
import type { Level } from '../../../net/minecraft/world/level/Level.d.ts'
import type { LevelSettings } from '../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { WorldDataConfiguration } from '../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { FuelValues } from '../../../net/minecraft/world/level/block/entity/FuelValues.d.ts'
import type { ChunkIOErrorReporter } from '../../../net/minecraft/world/level/chunk/storage/ChunkIOErrorReporter.d.ts'
import type { RegionStorageInfo } from '../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { GameRule } from '../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRules } from '../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { WorldGenSettings } from '../../../net/minecraft/world/level/levelgen/WorldGenSettings.d.ts'
import type { StructureTemplateManager } from '../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
import type { WeatherData } from '../../../net/minecraft/world/level/saveddata/WeatherData.d.ts'
import type { CommandStorage } from '../../../net/minecraft/world/level/storage/CommandStorage.d.ts'
import type { LevelData$RespawnData } from '../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
import type { LevelResource } from '../../../net/minecraft/world/level/storage/LevelResource.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { PlayerDataStorage } from '../../../net/minecraft/world/level/storage/PlayerDataStorage.d.ts'
import type { SavedDataStorage } from '../../../net/minecraft/world/level/storage/SavedDataStorage.d.ts'
import type { WorldData } from '../../../net/minecraft/world/level/storage/WorldData.d.ts'
import type { TimerQueue } from '../../../net/minecraft/world/level/timers/TimerQueue.d.ts'
export abstract class MinecraftServer extends ReentrantBlockableEventLoop<TickTask> implements GlobalAttachmentsProvider, DataResourceStore, MinecraftServerHooks, FabricOriginalKnownPacksGetter, CommandSource, ServerInfo, ChunkIOErrorReporter {
    static ABSOLUTE_MAX_WORLD_SIZE: number;
    static ANONYMOUS_PLAYER_PROFILE: NameAndId;
    static BLOCK_TIME_NANOS: number;
    static DEFAULT_GAME_RULES: () => GameRules;
    static DEMO_SETTINGS: LevelSettings;
    static NULL: CommandSource;
    static SERVER_THREAD_NAME: string;
    static SPAWN_POSITION_SEARCH_RADIUS: number;
    static VANILLA_BRAND: string;
    static configurePackRepository(parampackRepository: PackRepository, paraminitialDataConfig: WorldDataConfiguration, paraminitMode: boolean, paramsafeMode: boolean): WorldDataConfiguration;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    static spin<S extends MinecraftServer>(paramfactory: (param0: Thread) => S): S;
    constructor(serverThread: Thread, storageSource: LevelStorageSource$LevelStorageAccess, packRepository: PackRepository, worldStem: WorldStem, gameRules: Optional<GameRules>, proxy: Proxy, fixerUpper: DataFixer, services: Services, levelLoadListener: LevelLoadListener, propagatesCrashes: boolean, notificationManager: NotificationManager)
    // private aggregatedTickTimesNanos: number;
    // private clockManager: ServerClockManager;
    readonly commandStorage: CommandStorage;
    readonly connection: ServerConnectionListener;
    readonly customBossEvents: CustomBossEvents;
    // private debugCommandProfiler: MinecraftServer$TimeProfiler;
    // private debugCommandProfilerDelayStart: boolean;
    // private debugSubscribers: ServerDebugSubscribers;
    // private delayedTasksMaxNextTickTimeNanos: number;
    // private effectiveRespawnData: LevelData$RespawnData;
    // private emptyTicks: number;
    readonly enforceWhitelist: boolean;
    // private executor: Executor;
    readonly fixerUpper: DataFixer;
    // private fuelValues: FuelValues;
    // private functionManager: ServerFunctionManager;
    readonly gameRules: GameRules;
    // private globalAttachments: GlobalAttachmentsImpl;
    // private idleTimeNanos: number;
    // private isDemo: boolean;
    // private isReady: boolean;
    // private isSaving: boolean;
    readonly keyPair: KeyPair;
    // private lastOverloadWarningNanos: number;
    // private lastServerStatus: number;
    // private lastTickNanos: number;
    readonly levelLoadListener: LevelLoadListener;
    // private levels: JavaMap<ResourceKey<Level>, ServerLevel>;
    readonly localIp: string;
    // private mayHaveDelayedTasks: boolean;
    // private metricsRecorder: MetricsRecorder;
    readonly motd: string;
    // private nextTickTimeNanos: number;
    // private notificationManager: NotificationManager;
    // private onMetricsRecordingFinished: (param0: Path) => void;
    // private onMetricsRecordingStopped: (param0: ProfileResults) => void;
    // private onlineMode: boolean;
    // private originalKnownPacks: (Object | null)[];
    readonly packRepository: PackRepository;
    // private packetProcessor: PacketProcessor;
    // private playerDataStorage: PlayerDataStorage;
    readonly playerList: PlayerList;
    readonly port: number;
    // private potionBrewing: PotionBrewing;
    readonly preventProxyConnections: boolean;
    readonly proxy: Proxy;
    // private random: RandomSource;
    readonly randomSequences: RandomSequences;
    // private registries: LayeredRegistryAccess<RegistryLayer>;
    // private resources: MinecraftServer$ReloadableResources;
    readonly running: boolean;
    // private savedDataStorage: SavedDataStorage;
    readonly scheduledEvents: TimerQueue<MinecraftServer>;
    readonly scoreboard: ServerScoreboard;
    readonly serverActivityMonitor: ServerActivityMonitor;
    // private serverId: string;
    // private serverThread: Thread;
    // private services: Services;
    readonly singleplayerProfile: GameProfile;
    // private smoothedTickTimeMillis: number;
    // private startupReady: AtomicBoolean;
    readonly status: ServerStatus;
    // private statusIcon: ServerStatus$Favicon;
    readonly stopped: boolean;
    readonly stopwatches: Stopwatches;
    // private storageSource: LevelStorageSource$LevelStorageAccess;
    // private structureTemplateManager: StructureTemplateManager;
    // private suppressedExceptions: SuppressedExceptionCollector;
    // private taskExecutionStartNanos: number;
    readonly tickCount: number;
    // private tickFrame: DiscontinuousFrame;
    // private tickRateManager: ServerTickRateManager;
    readonly tickTimesNanos: number[];
    // private tickables: () => void[];
    // private ticksUntilAutosave: number;
    readonly usingWhitelist: boolean;
    // private waitingForNextTick: boolean;
    readonly weatherData: WeatherData;
    // private willStartRecordingMetrics: boolean;
    readonly worldData: WorldData;
    readonly worldGenSettings: WorldGenSettings;
    acceptsFailure(): boolean;
    acceptsSuccess(): boolean;
    acceptsTransfers(): boolean;
    addTickable(tickable: () => void): void;
    afterServerStartedEvent(): void;
    allowFlight(): boolean;
    alwaysAccepts(): boolean;
    // private autoSave(): void;
    // private buildPlayerStatus(): ServerStatus$Players;
    // private buildServerStatus(): ServerStatus;
    cancelRecordingMetrics(): void;
    clockManager(): ServerClockManager;
    close(): void;
    // private computeNextAutosaveInterval(): number;
    createChunkLoadStatusView(radius: number): ChunkLoadStatusView;
    createCommandSourceStack(): CommandSourceStack;
    createGameModeForPlayer(player: ServerPlayer): ServerPlayerGameMode;
    createLevels(): void;
    // private createProfiler(): ProfilerFiller;
    createTextFilterForPlayer(player: ServerPlayer): TextFilter;
    debugSubscribers(): ServerDebugSubscribers;
    doRunTask(task: TickTask): void;
    // private dumpClasspath(path: Path): void;
    // private dumpGameRules(path: Path): void;
    // private dumpMiscStats(path: Path): void;
    // private dumpNativeModules(path: Path): void;
    dumpServerProperties(path: Path): void;
    // private dumpThreads(path: Path): void;
    endMetricsRecordingTick(): void;
    enforceGameTypeForPlayers(gameType: GameType): number;
    enforceSecureProfile(): boolean;
    executeIfPossible(command: () => void): void;
    fabric$getOriginalKnownPacks(): (Object | null)[];
    fabric$isStartupReady(): boolean;
    fillServerSystemReport(systemReport: SystemReport): SystemReport;
    fillSystemReport(systemReport: SystemReport): SystemReport;
    findRespawnDimension(): ServerLevel;
    // private finishMeasuringTaskExecutionTime(): void;
    finishRecordingMetrics(): void;
    forceDifficulty(): void;
    forceGameTimeSynchronization(): void;
    forceSynchronousWrites(): boolean;
    fuelValues(): FuelValues;
    getAbsoluteMaxWorldSize(): number;
    getAdvancements(): ServerAdvancementManager;
    getAllLevels(): ServerLevel[];
    getAverageTickTimeNanos(): number;
    getChatDecorator(): (param0: ServerPlayer, param1: Component) => Component;
    getChatSpamThresholdSeconds(): number;
    getCodeOfConducts(): JavaMap<string, string>;
    getCommandSpamThresholdSeconds(): number;
    getCommandStorage(): CommandStorage;
    getCommands(): Commands;
    getCompressionThreshold(): number;
    getConnection(): ServerConnectionListener;
    getCurrentSmoothedTickTime(): number;
    getCustomBossEvents(): CustomBossEvents;
    getDataStorage(): SavedDataStorage;
    getDefaultGameType(): GameType;
    getFile(name: string): Path;
    getFixerUpper(): DataFixer;
    getForcedGameType(): GameType;
    getFunctionCompilationPermissions(): PermissionSet;
    getFunctions(): ServerFunctionManager;
    getGameRules(): GameRules;
    getGlobalGameRules(): GameRules;
    getKeyPair(): KeyPair;
    getLevel(dimension: ResourceKey<Level>): ServerLevel;
    getLevelLoadListener(): LevelLoadListener;
    getLocalIp(): string;
    getMaxChainedNeighborUpdates(): number;
    getMaxPlayers(): number;
    getModdedStatus(): ModCheck;
    getMotd(): string;
    getNextTickTime(): number;
    getOrThrow<T extends unknown>(arg0: DataResourceStore$Key<T>): T;
    getOrThrow(arg0: DataResourceStore$Key<Object>): Object;
    getPackRepository(): PackRepository;
    getPlayerCount(): number;
    getPlayerList(): PlayerList;
    getPlayerNames(): string[];
    getPort(): number;
    getPreventProxyConnections(): boolean;
    getProfilePermissions(nameAndId: NameAndId): LevelBasedPermissionSet;
    getProxy(): Proxy;
    getRandomSequence(key: Identifier): RandomSource;
    getRandomSequences(): RandomSequences;
    getRateLimitPacketsPerSecond(): number;
    getRecipeManager(): RecipeManager;
    getResourceManager(): ResourceManager;
    getRespawnData(): LevelData$RespawnData;
    getRunningThread(): Thread;
    getScaledTrackingDistance(baseRange: number): number;
    getScheduledEvents(): TimerQueue<MinecraftServer>;
    getScoreboard(): ServerScoreboard;
    getServerActivityMonitor(): ServerActivityMonitor;
    getServerDirectory(): Path;
    getServerModName(): string;
    getServerResourcePack(): Optional<MinecraftServer$ServerResourcePackInfo>;
    getServerVersion(): string;
    getSingleplayerProfile(): GameProfile;
    getStatus(): ServerStatus;
    getStopwatches(): Stopwatches;
    getStructureManager(): StructureTemplateManager;
    getTickCount(): number;
    getTickTimeLogger(): SampleLogger;
    getTickTimesNanos(): number[];
    getWeatherData(): WeatherData;
    getWorldData(): WorldData;
    getWorldGenSettings(): WorldGenSettings;
    getWorldPath(resource: LevelResource): Path;
    getWorldScreenshotFile(): Optional<Path>;
    globalAttachments(): GlobalAttachments;
    halt(wait: boolean): void;
    handleCustomClickAction(id: Identifier, payload: Optional<Tag>): void;
    // private haveTime(): boolean;
    hidesOnlinePlayers(): boolean;
    initServer(): boolean;
    initializeKeyPair(): void;
    invalidateStatus(): void;
    isAutoSave(): boolean;
    isCurrentlySaving(): boolean;
    isDedicatedServer(): boolean;
    isDemo(): boolean;
    isEnforceWhitelist(): boolean;
    isHardcore(): boolean;
    isPaused(): boolean;
    isPublished(): boolean;
    isReady(): boolean;
    isRecordingMetrics(): boolean;
    isResourcePackRequired(): boolean;
    isRunning(): boolean;
    isShutdown(): boolean;
    isSingleplayer(): boolean;
    isSingleplayerOwner(nameAndId: NameAndId): boolean;
    isStopped(): boolean;
    isTickTimeLoggingEnabled(): boolean;
    isTimeProfilerRunning(): boolean;
    isUnderSpawnProtection(level: ServerLevel, pos: BlockPos, player: Player): boolean;
    isUsingWhitelist(): boolean;
    kickUnlistedPlayers(): void;
    levelKeys(): ResourceKey<Level>[];
    loadLevel(): void;
    // private loadStatusIcon(): Optional<ServerStatus$Favicon>;
    logChatMessage(message: Component, chatType: ChatType$Bound, tag: string): void;
    // private logFullTickTime(): void;
    logIPs(): boolean;
    // private logTickMethodTime(startTime: number): void;
    notificationManager(): NotificationManager;
    onGameRuleChanged<T extends unknown>(rule: GameRule<T>, value: T): void;
    onServerCrash(report: CrashReport): void;
    onServerExit(): void;
    onTickRateChanged(): void;
    operatorUserPermissions(): LevelBasedPermissionSet;
    overworld(): ServerLevel;
    packetProcessor(): PacketProcessor;
    pauseWhenEmptySeconds(): number;
    playerIdleTimeout(): number;
    pollTask(): boolean;
    // private pollTaskInternal(): boolean;
    potionBrewing(): PotionBrewing;
    // private prepareLevels(): void;
    processPacketsAndTick(sprinting: boolean): void;
    publishServer(scope: MinecraftServer$MultiplayerScope, gameMode: GameType, allowCommands: boolean, port: number): boolean;
    registries(): LayeredRegistryAccess<RegistryLayer>;
    registryAccess(): RegistryAccess$Frozen;
    reloadResources(packsToEnable: string[]): CompletableFuture<void>;
    reloadableRegistries(): ReloadableServerRegistries$Holder;
    repliesToStatus(): boolean;
    reportChunkLoadFailure(throwable: Throwable, storageInfo: RegionStorageInfo, pos: ChunkPos): void;
    reportChunkSaveFailure(throwable: Throwable, storageInfo: RegionStorageInfo, pos: ChunkPos): void;
    reportMisplacedChunk(storedPos: ChunkPos, requestedPos: ChunkPos, storageInfo: RegionStorageInfo): void;
    reportPacketHandlingException(throwable: Throwable, packetType: PacketType<any>): void;
    runServer(): void;
    saveAllChunks(silent: boolean, flush: boolean, force: boolean): boolean;
    // private saveDebugReport(output: Path): void;
    saveEverything(silent: boolean, flush: boolean, force: boolean): boolean;
    scheduleExecutables(): boolean;
    selectLevelLoadFocusPos(): GlobalPos;
    // private sendDifficultyUpdate(player: ServerPlayer): void;
    sendLowDiskSpaceWarning(): void;
    sendSystemMessage(message: Component): void;
    serverLinks(): ServerLinks;
    services(): Services;
    setAutoSave(enable: boolean): boolean;
    setDefaultGameType(gameType: GameType): void;
    setDemo(demo: boolean): void;
    setDifficulty(difficulty: Difficulty, ignoreLock: boolean): void;
    setDifficultyLocked(locked: boolean): void;
    setEnforceWhitelist(enforceWhitelist: boolean): void;
    setId(serverId: string): void;
    setLocalIp(ip: string): void;
    setMotd(motd: string): void;
    setPlayerIdleTimeout(playerIdleTimeout: number): void;
    setPlayerList(players: PlayerList): void;
    setPort(port: number): void;
    setPreventProxyConnections(preventProxyConnections: boolean): void;
    setRespawnData(respawnData: LevelData$RespawnData): void;
    setSingleplayerProfile(singleplayerProfile: GameProfile): void;
    setUsesAuthentication(onlineMode: boolean): void;
    setUsingWhitelist(usingWhitelist: boolean): void;
    setWeatherParameters(clearTime: number, rainTime: number, raining: boolean, thundering: boolean): void;
    // private setupDebugLevel(worldData: WorldData): void;
    shouldInformAdmins(): boolean;
    shouldRconBroadcast(): boolean;
    shouldRun(task: TickTask): boolean;
    // private startMeasuringTaskExecutionTime(): void;
    startRecordingMetrics(onStopped: (param0: ProfileResults) => void, onFinished: (param0: Path) => void): void;
    startTimeProfiler(): void;
    stopRecordingMetrics(): void;
    stopServer(): void;
    stopTimeProfiler(): ProfileResults;
    // private storeChunkIoError(report: CrashReport, pos: ChunkPos, storageInfo: RegionStorageInfo): void;
    tickChildren(haveTime: () => boolean): void;
    tickConnection(): void;
    tickRateManager(): ServerTickRateManager;
    tickServer(haveTime: () => boolean): void;
    unpublishServer(): boolean;
    // private updateEffectiveRespawnData(): void;
    updateMobSpawningFlags(): void;
    useNativeTransport(): boolean;
    usesAuthentication(): boolean;
    waitForTasks(): void;
    waitUntilNextTick(): void;
    warnOnLowDiskSpace(): void;
    wrapRunnable(runnable: () => void): TickTask;
}