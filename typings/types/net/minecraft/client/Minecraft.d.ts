import type { GameProfile } from '../../../com/mojang/authlib/GameProfile.d.ts'
import type { BanDetails } from '../../../com/mojang/authlib/minecraft/BanDetails.d.ts'
import type { UserApiService } from '../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { UserApiService$UserProperties } from '../../../com/mojang/authlib/minecraft/UserApiService$UserProperties.d.ts'
import type { ProfileResult } from '../../../com/mojang/authlib/yggdrasil/ProfileResult.d.ts'
import type { TracyFrameCapture } from '../../../com/mojang/blaze3d/TracyFrameCapture.d.ts'
import type { FramerateLimitTracker } from '../../../com/mojang/blaze3d/platform/FramerateLimitTracker.d.ts'
import type { InputConstants$Key } from '../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { MonitorManager } from '../../../com/mojang/blaze3d/platform/MonitorManager.d.ts'
import type { TextInputManager } from '../../../com/mojang/blaze3d/platform/TextInputManager.d.ts'
import type { Window } from '../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { WindowEventHandler } from '../../../com/mojang/blaze3d/platform/WindowEventHandler.d.ts'
import type { BackendCreationException } from '../../../com/mojang/blaze3d/systems/BackendCreationException.d.ts'
import type { GpuSurface } from '../../../com/mojang/blaze3d/systems/GpuSurface.d.ts'
import type { TimerQuery } from '../../../com/mojang/blaze3d/systems/TimerQuery.d.ts'
import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { RealmsDataFetcher } from '../../../com/mojang/realmsclient/gui/RealmsDataFetcher.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { MinecraftAccessor } from '../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/client/MinecraftAccessor.d.ts'
import type { GuiExtensions } from '../../../net/fabricmc/fabric/impl/client/screen/GuiExtensions.d.ts'
import type { MinecraftAccessor as MinecraftAccessor_2 } from '../../../net/fabricmc/fabric/mixin/networking/client/accessor/MinecraftAccessor.d.ts'
import type { CrashReport } from '../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../net/minecraft/CrashReportCategory.d.ts'
import type { SystemReport } from '../../../net/minecraft/SystemReport.d.ts'
import type { DeltaTracker } from '../../../net/minecraft/client/DeltaTracker.d.ts'
import type { DeltaTracker$Timer } from '../../../net/minecraft/client/DeltaTracker$Timer.d.ts'
import type { GameLoadCookie } from '../../../net/minecraft/client/GameLoadCookie.d.ts'
import type { GameNarrator } from '../../../net/minecraft/client/GameNarrator.d.ts'
import type { HotbarManager } from '../../../net/minecraft/client/HotbarManager.d.ts'
import type { InputType } from '../../../net/minecraft/client/InputType.d.ts'
import type { KeyboardHandler } from '../../../net/minecraft/client/KeyboardHandler.d.ts'
import type { MouseHandler } from '../../../net/minecraft/client/MouseHandler.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { PeriodicNotificationManager } from '../../../net/minecraft/client/PeriodicNotificationManager.d.ts'
import type { ResourceLoadStateTracker } from '../../../net/minecraft/client/ResourceLoadStateTracker.d.ts'
import type { User } from '../../../net/minecraft/client/User.d.ts'
import type { BlockColors } from '../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { Font } from '../../../net/minecraft/client/gui/Font.d.ts'
import type { Gui } from '../../../net/minecraft/client/gui/Gui.d.ts'
import type { DebugScreenOverlay } from '../../../net/minecraft/client/gui/components/DebugScreenOverlay.d.ts'
import type { DebugScreenEntryList } from '../../../net/minecraft/client/gui/components/debug/DebugScreenEntryList.d.ts'
import type { GuiEventListener } from '../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { FontManager } from '../../../net/minecraft/client/gui/font/FontManager.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { PlayerSocialManager } from '../../../net/minecraft/client/gui/screens/social/PlayerSocialManager.d.ts'
import type { RemoteFriendListUpdateHandler } from '../../../net/minecraft/client/gui/screens/social/RemoteFriendListUpdateHandler.d.ts'
import type { WorldOpenFlows } from '../../../net/minecraft/client/gui/screens/worldselection/WorldOpenFlows.d.ts'
import type { GameConfig } from '../../../net/minecraft/client/main/GameConfig.d.ts'
import type { EntityModelSet } from '../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { ClientLevel } from '../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { ProfileKeyPairManager } from '../../../net/minecraft/client/multiplayer/ProfileKeyPairManager.d.ts'
import type { ServerData } from '../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ChatAbilities } from '../../../net/minecraft/client/multiplayer/chat/ChatAbilities.d.ts'
import type { ReportEnvironment } from '../../../net/minecraft/client/multiplayer/chat/report/ReportEnvironment.d.ts'
import type { ReportingContext } from '../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { ParticleEngine } from '../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { LocalPlayer } from '../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { QuickPlayLog } from '../../../net/minecraft/client/quickplay/QuickPlayLog.d.ts'
import type { GameRenderer } from '../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { GpuWarnlistManager } from '../../../net/minecraft/client/renderer/GpuWarnlistManager.d.ts'
import type { LevelRenderer } from '../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { MapRenderer } from '../../../net/minecraft/client/renderer/MapRenderer.d.ts'
import type { PlayerSkinRenderCache } from '../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { ShaderManager } from '../../../net/minecraft/client/renderer/ShaderManager.d.ts'
import type { BlockEntityRenderDispatcher } from '../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderDispatcher.d.ts'
import type { EntityRenderDispatcher } from '../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { LevelExtractor } from '../../../net/minecraft/client/renderer/extract/LevelExtractor.d.ts'
import type { ItemModelResolver } from '../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { TextureManager } from '../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { MapTextureManager } from '../../../net/minecraft/client/resources/MapTextureManager.d.ts'
import type { SkinManager } from '../../../net/minecraft/client/resources/SkinManager.d.ts'
import type { LanguageManager } from '../../../net/minecraft/client/resources/language/LanguageManager.d.ts'
import type { ModelManager } from '../../../net/minecraft/client/resources/model/ModelManager.d.ts'
import type { AtlasManager } from '../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { DownloadedPackSource } from '../../../net/minecraft/client/resources/server/DownloadedPackSource.d.ts'
import type { IntegratedServer } from '../../../net/minecraft/client/server/IntegratedServer.d.ts'
import type { MusicManager } from '../../../net/minecraft/client/sounds/MusicManager.d.ts'
import type { SoundManager } from '../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { ClientTelemetryManager } from '../../../net/minecraft/client/telemetry/ClientTelemetryManager.d.ts'
import type { Tutorial } from '../../../net/minecraft/client/tutorial/Tutorial.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Gizmos$TemporaryCollection } from '../../../net/minecraft/gizmos/Gizmos$TemporaryCollection.d.ts'
import type { SimpleGizmoCollector } from '../../../net/minecraft/gizmos/SimpleGizmoCollector.d.ts'
import type { SimpleGizmoCollector$GizmoInstance } from '../../../net/minecraft/gizmos/SimpleGizmoCollector$GizmoInstance.d.ts'
import type { Connection } from '../../../net/minecraft/network/Connection.d.ts'
import type { PacketProcessor } from '../../../net/minecraft/network/PacketProcessor.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { Services } from '../../../net/minecraft/server/Services.d.ts'
import type { WorldStem } from '../../../net/minecraft/server/WorldStem.d.ts'
import type { Dialog } from '../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { VanillaPackResources } from '../../../net/minecraft/server/packs/VanillaPackResources.d.ts'
import type { PackRepository } from '../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { ReloadableResourceManager } from '../../../net/minecraft/server/packs/resources/ReloadableResourceManager.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { Music } from '../../../net/minecraft/sounds/Music.d.ts'
import type { ModCheck } from '../../../net/minecraft/util/ModCheck.d.ts'
import type { ContinuousProfiler } from '../../../net/minecraft/util/profiling/ContinuousProfiler.d.ts'
import type { ProfilerFiller } from '../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { SingleTickProfiler } from '../../../net/minecraft/util/profiling/SingleTickProfiler.d.ts'
import type { MetricsRecorder } from '../../../net/minecraft/util/profiling/metrics/profiling/MetricsRecorder.d.ts'
import type { ReentrantBlockableEventLoop } from '../../../net/minecraft/util/thread/ReentrantBlockableEventLoop.d.ts'
import type { Entity } from '../../../net/minecraft/world/entity/Entity.d.ts'
import type { GameRules } from '../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { LevelStorageSource } from '../../../net/minecraft/world/level/storage/LevelStorageSource.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { DirectoryValidator } from '../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
import type { HitResult } from '../../../net/minecraft/world/phys/HitResult.d.ts'
export class Minecraft extends ReentrantBlockableEventLoop<() => void> implements WindowEventHandler, MinecraftAccessor, MinecraftAccessor_2 {
    static BLOCK_TIME_NANOS: number;
    static DEFAULT_FONT: Identifier;
    static UPDATE_DRIVERS_ADVICE: string;
    static checkModStatus(): ModCheck;
    static crash(paramminecraft: Minecraft, paramgameDirectory: File, paramcrash: CrashReport, paramexitCode: number): void;
    static fillReport(paramminecraft: Minecraft, paramlanguageManager: LanguageManager, paramlaunchedVersion: string, paramoptions: Options, paramreport: CrashReport): void;
    static getInstance(): Minecraft;
    static getLauncherBrand(): string;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    static saveReport(paramgameDirectory: File, paramcrash: CrashReport, paramreportExitCode: number): number;
    static saveReport(paramgameDirectory: File, paramcrash: CrashReport): void;
    static saveReportAndShutdownSoundManager(paramminecraft: Minecraft, paramgameDirectory: File, paramcrash: CrashReport, paramexitCode: number): number;
    constructor(gameConfig: GameConfig)
    // private allowsChat: boolean;
    // private allowsMultiplayer: boolean;
    readonly atlasManager: AtlasManager;
    // private attackCancelled: boolean;
    // private backendCreationException: BackendCreationException;
    readonly blockColors: BlockColors;
    readonly blockEntityRenderDispatcher: BlockEntityRenderDispatcher;
    // private canary: number;
    clientStartTimeMs: number;
    // private clientTickCount: number;
    crosshairPickEntity: Entity;
    debugEntries: DebugScreenEntryList;
    readonly deltaTracker: DeltaTracker$Timer;
    readonly demo: boolean;
    // private directoryValidator: DirectoryValidator;
    readonly downloadedPackSource: DownloadedPackSource;
    // private drainedLatestTickGizmos: SimpleGizmoCollector$GizmoInstance[];
    readonly entityRenderDispatcher: EntityRenderDispatcher;
    readonly fixerUpper: DataFixer;
    font: Font;
    fontFilterFishy: Font;
    fontManager: FontManager;
    // private fpsPieProfiler: ContinuousProfiler;
    // private fpsPieRenderTicks: number;
    readonly frameTimeNs: number;
    readonly framerateLimitTracker: FramerateLimitTracker;
    // private frames: number;
    gameDirectory: File;
    readonly gameLoadFinished: boolean;
    gameMode: MultiPlayerGameMode;
    gameRenderer: GameRenderer;
    // private gameThread: Thread;
    readonly gpuUtilization: number;
    readonly gpuWarnlistManager: GpuWarnlistManager;
    gui: Gui;
    // private guiExtensions: GuiExtensions;
    hitResult: HitResult;
    readonly hotbarManager: HotbarManager;
    // private isLocalServer: boolean;
    readonly itemModelResolver: ItemModelResolver;
    keyboardHandler: KeyboardHandler;
    readonly languageManager: LanguageManager;
    // private lastActiveTime: number;
    readonly lastInputType: InputType;
    // private lastNanoTime: number;
    // private lastTime: number;
    readonly launchedVersion: string;
    level: ClientLevel;
    levelExtractor: LevelExtractor;
    levelRenderer: LevelRenderer;
    readonly levelSource: LevelStorageSource;
    readonly mapRenderer: MapRenderer;
    readonly mapTextureManager: MapTextureManager;
    readonly metricsRecorder: MetricsRecorder;
    missTime: number;
    readonly modelManager: ModelManager;
    // private monitorManager: MonitorManager;
    mouseHandler: MouseHandler;
    readonly musicManager: MusicManager;
    readonly narrator: GameNarrator;
    readonly offlineDeveloperMode: boolean;
    options: Options;
    // private packetProcessor: PacketProcessor;
    particleEngine: ParticleEngine;
    // private pause: boolean;
    readonly pendingConnection: Connection;
    // private pendingReload: CompletableFuture<void>;
    readonly perTickGizmos: SimpleGizmoCollector;
    player: LocalPlayer;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    readonly playerSocialManager: PlayerSocialManager;
    // private profileFuture: CompletableFuture<ProfileResult>;
    profileKeyPairManager: ProfileKeyPairManager;
    readonly proxy: Proxy;
    // private quickPlayLog: QuickPlayLog;
    // private realmsDataFetcher: RealmsDataFetcher;
    // private regionalCompliancies: PeriodicNotificationManager;
    // private reloadStateTracker: ResourceLoadStateTracker;
    // private remoteFriendListUpdateHandler: RemoteFriendListUpdateHandler;
    readonly reportingContext: ReportingContext;
    readonly resourceManager: ReloadableResourceManager;
    readonly resourcePackDirectory: Path;
    readonly resourcePackRepository: PackRepository;
    // private rightClickDelay: number;
    readonly running: boolean;
    // private savedCpuDuration: number;
    services: Services;
    readonly shaderManager: ShaderManager;
    readonly singleplayerServer: IntegratedServer;
    readonly skinManager: SkinManager;
    smartCull: boolean;
    readonly soundManager: SoundManager;
    // private surfaceIsInvalid: boolean;
    readonly telemetryManager: ClientTelemetryManager;
    // private textInputManager: TextInputManager;
    readonly textureManager: TextureManager;
    // private timerQuery: TimerQuery;
    // private tracyFrameCapture: TracyFrameCapture;
    readonly tutorial: Tutorial;
    user: User;
    // private userApiService: UserApiService;
    // private userPropertiesFuture: CompletableFuture<UserApiService$UserProperties>;
    readonly vanillaPackResources: VanillaPackResources;
    readonly window: Window;
    // private windowSurface: GpuSurface;
    // private windowSurfaceNeedsReconfiguring: boolean;
    wireframe: boolean;
    // private abortResourcePackRecovery(): void;
    // private addResourcePackLoadFailToast(message: Component): void;
    allowChatOnlyWithFriend(): boolean;
    allowFriendRequests(): boolean;
    allowsMultiplayer(): boolean;
    allowsRealms(): boolean;
    allowsTelemetry(): boolean;
    // private archiveProfilingReport(systemReport: SystemReport, profilingResultPaths: Path[]): Path;
    callStartUseItem(): void;
    canInterruptScreen(): boolean;
    canSwitchGameMode(): boolean;
    clearClientLevel(screen: Screen): void;
    clearDownloadedResourcePacks(): void;
    clearResourcePacksOnError(t: Throwable, message: Component, loadCookie: GameLoadCookie): void;
    close(): void;
    collectPerTickGizmos(): Gizmos$TemporaryCollection;
    computeChatAbilities(): ChatAbilities;
    // private constructProfiler(shouldCollectFrameProfile: boolean, tickProfiler: SingleTickProfiler): ProfilerFiller;
    // private continueAttack(down: boolean): void;
    // private createTitle(): string;
    createWorldOpenFlows(): WorldOpenFlows;
    cursorEntered(): void;
    // private debugClientMetricsCancel(): void;
    debugClientMetricsStart(debugFeedback: (param0: Component) => void): boolean;
    // private debugClientMetricsStop(): void;
    delayCrash(crash: CrashReport): void;
    delayTextureReload(): CompletableFuture<void>;
    directoryValidator(): DirectoryValidator;
    disconnect(screen: Screen, keepResourcePacks: boolean): void;
    disconnect(screen: Screen, keepResourcePacks: boolean, stopSound: boolean): void;
    disconnectFromWorld(message: Component): void;
    disconnectWithProgressScreen(): void;
    disconnectWithProgressScreen(stopSound: boolean): void;
    disconnectWithSavingScreen(): void;
    doWorldLoad(levelSourceAccess: LevelStorageSource$LevelStorageAccess, packRepository: PackRepository, worldStem: WorldStem, gameRules: Optional<GameRules>, newWorld: boolean): void;
    // private emergencySave(): void;
    emergencySaveAndCrash(partialReport: CrashReport): void;
    exitWorldAndClose(): void;
    extraTelemetryAvailable(): boolean;
    fillReport(report: CrashReport): CrashReport;
    // private fillUptime(category: CrashReportCategory): void;
    // private finishProfilers(shouldCollectFrameProfile: boolean, tickProfiler: SingleTickProfiler): void;
    framebufferSizeChanged(): void;
    friendsEnabled(): boolean;
    getAtlasManager(): AtlasManager;
    getBlockColors(): BlockColors;
    getBlockEntityRenderDispatcher(): BlockEntityRenderDispatcher;
    getCameraEntity(): Entity;
    getConnection(): ClientPacketListener;
    getCurrentServer(): ServerData;
    getDebugOverlay(): DebugScreenOverlay;
    getDeltaTracker(): DeltaTracker;
    getDownloadedPackSource(): DownloadedPackSource;
    getEntityModels(): EntityModelSet;
    getEntityRenderDispatcher(): EntityRenderDispatcher;
    getFixerUpper(): DataFixer;
    getFps(): number;
    getFrameTimeNs(): number;
    getFramerateLimitTracker(): FramerateLimitTracker;
    getGameProfile(): GameProfile;
    getGpuUtilization(): number;
    getGpuWarnlistManager(): GpuWarnlistManager;
    getHotbarManager(): HotbarManager;
    getItemModelResolver(): ItemModelResolver;
    getLanguageManager(): LanguageManager;
    getLastInputType(): InputType;
    getLaunchedVersion(): string;
    getLevelSource(): LevelStorageSource;
    getMapRenderer(): MapRenderer;
    getMapTextureManager(): MapTextureManager;
    getMetricsRecorder(): MetricsRecorder;
    getModelManager(): ModelManager;
    getMusicManager(): MusicManager;
    getMusicVolume(): number;
    getNarrator(): GameNarrator;
    getPendingConnection(): Connection;
    getPerTickGizmos(): SimpleGizmoCollector$GizmoInstance[];
    getPlayerSocialManager(): PlayerSocialManager;
    getProfileKeyPairManager(): ProfileKeyPairManager;
    getProfileResult(): ProfileResult;
    getProxy(): Proxy;
    // private getQuickActionsDialog(): Optional<Holder<Dialog>>;
    getReportingContext(): ReportingContext;
    getResourceManager(): ResourceManager;
    getResourcePackDirectory(): Path;
    getResourcePackRepository(): PackRepository;
    getRunningThread(): Thread;
    getShaderManager(): ShaderManager;
    getSingleplayerServer(): IntegratedServer;
    getSituationalMusic(): Music;
    getSkinManager(): SkinManager;
    getSoundManager(): SoundManager;
    getTelemetryManager(): ClientTelemetryManager;
    getTextureManager(): TextureManager;
    // private getTickTargetMillis(defaultTickTargetMillis: number): number;
    getTutorial(): Tutorial;
    getUser(): User;
    getVanillaPackResources(): VanillaPackResources;
    getWindow(): Window;
    grabPanoramixScreenshot(folder: File): Component;
    handleGlobalKeyPress(key: InputConstants$Key, controlDown: boolean): boolean;
    // private handleKeybinds(): void;
    hasAltDown(): boolean;
    hasControlDown(): boolean;
    hasShiftDown(): boolean;
    hasSingleplayerServer(): boolean;
    invalidateSurfaceConfiguration(): void;
    isBlocked(uuid: UUID): boolean;
    isDemo(): boolean;
    isEnforceUnicode(): boolean;
    isFriendOnlyRestricted(uuid: UUID): boolean;
    isGameLoadFinished(): boolean;
    // private isLevelRunningNormally(): boolean;
    // private isLocalOrUnknownPlayer(uuid: UUID): boolean;
    isLocalPlayer(profileId: UUID): boolean;
    isLocalServer(): boolean;
    isMultiplayerServer(): boolean;
    isNameBanned(): boolean;
    isOfflineDeveloperMode(): boolean;
    isPaused(): boolean;
    isRunning(): boolean;
    isTextFilteringEnabled(): boolean;
    isWindowActive(): boolean;
    // private loadCriticalShaders(): void;
    multiplayerBan(): BanDetails;
    // private onFullscreenError(error: number, description: number): void;
    // private onGameLoadFinished(cookie: GameLoadCookie): void;
    // private onResourceLoadFinished(loadCookie: GameLoadCookie): void;
    onTextInputFocusChange(element: GuiEventListener, isFocused: boolean): void;
    packetProcessor(): PacketProcessor;
    pauseGame(suppressPauseMenuIfWeReallyArePausing: boolean): void;
    // private pauseIfInactive(): void;
    // private pick(partialTicks: number): void;
    // private pickBlockOrEntity(): void;
    playerSkinRenderCache(): PlayerSkinRenderCache;
    prepareForMultiplayer(): void;
    quickPlayLog(): QuickPlayLog;
    realmsDataFetcher(): RealmsDataFetcher;
    reloadResourcePacks(): CompletableFuture<void>;
    // private reloadResourcePacks(isRecovery: boolean, loadCookie: GameLoadCookie): CompletableFuture<void>;
    renderFrame(advanceGameTime: boolean): void;
    resizeGui(): void;
    // private rollbackResourcePacks(t: Throwable, loadCookie: GameLoadCookie): void;
    run(): void;
    // private runTick(advanceGameTime: boolean): void;
    // private selfTest(): void;
    sendLowDiskSpaceWarning(): void;
    setCameraEntity(cameraEntity: Entity): void;
    setLastInputType(lastInputType: InputType): void;
    setLevel(level: ClientLevel): void;
    setScreenAndShow(screen: Screen): void;
    shouldEntityAppearGlowing(entity: Entity): boolean;
    shouldRun(task: () => void): boolean;
    showDebugChat(message: Component): void;
    showOnlyReducedInfo(): boolean;
    // private startAttack(): boolean;
    // private startUseItem(): void;
    stop(): void;
    telemetryOptInExtra(): boolean;
    textInputManager(): TextInputManager;
    tick(): void;
    // private toggleFriendsScreen(): boolean;
    // private toggleFullscreen(): void;
    triggerResourcePackRecovery(exception: Exception): void;
    updateFontOptions(): void;
    // private updateLevelInEngines(level: ClientLevel): void;
    // private updateLevelInEngines(level: ClientLevel, stopSound: boolean): void;
    updateMaxMipLevel(mipmapLevels: number): void;
    updateReportEnvironment(environment: ReportEnvironment): void;
    updateTitle(): void;
    // private userProperties(): UserApiService$UserProperties;
    // private viaFabricPlus$canReachAround(arg0: Entity): boolean;
    windowSurface(): GpuSurface;
    wrapRunnable(runnable: () => void): () => void;
}