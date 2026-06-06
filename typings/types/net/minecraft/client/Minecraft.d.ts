import type { GameProfile } from '../../../com/mojang/authlib/GameProfile.d.ts'
import type { BanDetails } from '../../../com/mojang/authlib/minecraft/BanDetails.d.ts'
import type { UserApiService } from '../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { UserApiService$UserProperties } from '../../../com/mojang/authlib/minecraft/UserApiService$UserProperties.d.ts'
import type { ProfileResult } from '../../../com/mojang/authlib/yggdrasil/ProfileResult.d.ts'
import type { YggdrasilAuthenticationService } from '../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { TracyFrameCapture } from '../../../com/mojang/blaze3d/TracyFrameCapture.d.ts'
import type { RenderTarget } from '../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { FramerateLimitTracker } from '../../../com/mojang/blaze3d/platform/FramerateLimitTracker.d.ts'
import type { TextInputManager } from '../../../com/mojang/blaze3d/platform/TextInputManager.d.ts'
import type { Window } from '../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { WindowEventHandler } from '../../../com/mojang/blaze3d/platform/WindowEventHandler.d.ts'
import type { TimerQuery$FrameProfile } from '../../../com/mojang/blaze3d/systems/TimerQuery$FrameProfile.d.ts'
import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { RealmsDataFetcher } from '../../../com/mojang/realmsclient/gui/RealmsDataFetcher.d.ts'
import type { LongArrayFIFOQueue } from '../../../it/unimi/dsi/fastutil/longs/LongArrayFIFOQueue.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { MinecraftAccessor } from '../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/client/MinecraftAccessor.d.ts'
import type { MinecraftAccessor as MinecraftAccessor_2 } from '../../../net/fabricmc/fabric/mixin/networking/client/accessor/MinecraftAccessor.d.ts'
import type { CrashReport } from '../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../net/minecraft/CrashReportCategory.d.ts'
import type { SystemReport } from '../../../net/minecraft/SystemReport.d.ts'
import type { CommandHistory } from '../../../net/minecraft/client/CommandHistory.d.ts'
import type { DeltaTracker } from '../../../net/minecraft/client/DeltaTracker.d.ts'
import type { DeltaTracker$Timer } from '../../../net/minecraft/client/DeltaTracker$Timer.d.ts'
import type { GameNarrator } from '../../../net/minecraft/client/GameNarrator.d.ts'
import type { HotbarManager } from '../../../net/minecraft/client/HotbarManager.d.ts'
import type { InputType } from '../../../net/minecraft/client/InputType.d.ts'
import type { KeyboardHandler } from '../../../net/minecraft/client/KeyboardHandler.d.ts'
import type { Minecraft$GameLoadCookie } from '../../../net/minecraft/client/Minecraft$GameLoadCookie.d.ts'
import type { MouseHandler } from '../../../net/minecraft/client/MouseHandler.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { PeriodicNotificationManager } from '../../../net/minecraft/client/PeriodicNotificationManager.d.ts'
import type { ResourceLoadStateTracker } from '../../../net/minecraft/client/ResourceLoadStateTracker.d.ts'
import type { User } from '../../../net/minecraft/client/User.d.ts'
import type { BlockColors } from '../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { Font } from '../../../net/minecraft/client/gui/Font.d.ts'
import type { Gui } from '../../../net/minecraft/client/gui/Gui.d.ts'
import type { ChatComponent$ChatMethod } from '../../../net/minecraft/client/gui/components/ChatComponent$ChatMethod.d.ts'
import type { DebugScreenOverlay } from '../../../net/minecraft/client/gui/components/DebugScreenOverlay.d.ts'
import type { DebugScreenEntryList } from '../../../net/minecraft/client/gui/components/debug/DebugScreenEntryList.d.ts'
import type { GuiEventListener } from '../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { ToastManager } from '../../../net/minecraft/client/gui/components/toasts/ToastManager.d.ts'
import type { TutorialToast } from '../../../net/minecraft/client/gui/components/toasts/TutorialToast.d.ts'
import type { FontManager } from '../../../net/minecraft/client/gui/font/FontManager.d.ts'
import type { Overlay } from '../../../net/minecraft/client/gui/screens/Overlay.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { PlayerSocialManager } from '../../../net/minecraft/client/gui/screens/social/PlayerSocialManager.d.ts'
import type { WorldOpenFlows } from '../../../net/minecraft/client/gui/screens/worldselection/WorldOpenFlows.d.ts'
import type { GameConfig } from '../../../net/minecraft/client/main/GameConfig.d.ts'
import type { EntityModelSet } from '../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { ClientLevel } from '../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { ProfileKeyPairManager } from '../../../net/minecraft/client/multiplayer/ProfileKeyPairManager.d.ts'
import type { ServerData } from '../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ChatAbilities } from '../../../net/minecraft/client/multiplayer/chat/ChatAbilities.d.ts'
import type { ChatListener } from '../../../net/minecraft/client/multiplayer/chat/ChatListener.d.ts'
import type { ReportEnvironment } from '../../../net/minecraft/client/multiplayer/chat/report/ReportEnvironment.d.ts'
import type { ReportingContext } from '../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { ParticleEngine } from '../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { ParticleResources } from '../../../net/minecraft/client/particle/ParticleResources.d.ts'
import type { LocalPlayer } from '../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { QuickPlayLog } from '../../../net/minecraft/client/quickplay/QuickPlayLog.d.ts'
import type { GameRenderer } from '../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { GpuWarnlistManager } from '../../../net/minecraft/client/renderer/GpuWarnlistManager.d.ts'
import type { LevelRenderer } from '../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { MapRenderer } from '../../../net/minecraft/client/renderer/MapRenderer.d.ts'
import type { PlayerSkinRenderCache } from '../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { RenderBuffers } from '../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { ShaderManager } from '../../../net/minecraft/client/renderer/ShaderManager.d.ts'
import type { BlockModelResolver } from '../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockEntityRenderDispatcher } from '../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderDispatcher.d.ts'
import type { EntityRenderDispatcher } from '../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { ItemModelResolver } from '../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { TextureManager } from '../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { MapTextureManager } from '../../../net/minecraft/client/resources/MapTextureManager.d.ts'
import type { SkinManager } from '../../../net/minecraft/client/resources/SkinManager.d.ts'
import type { SplashManager } from '../../../net/minecraft/client/resources/SplashManager.d.ts'
import type { WaypointStyleManager } from '../../../net/minecraft/client/resources/WaypointStyleManager.d.ts'
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
    static ALT_FONT: Identifier;
    static BLOCK_TIME_NANOS: number;
    static DEFAULT_FONT: Identifier;
    static UNIFORM_FONT: Identifier;
    static UPDATE_DRIVERS_ADVICE: string;
    static checkModStatus(): ModCheck;
    static crash(paramminecraft: Minecraft, paramgameDirectory: File, paramcrash: CrashReport): void;
    static fillReport(paramminecraft: Minecraft, paramlanguageManager: LanguageManager, paramlaunchedVersion: string, paramoptions: Options, paramreport: CrashReport): void;
    static getInstance(): Minecraft;
    static getLauncherBrand(): string;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    static renderNames(): boolean;
    static saveReport(paramgameDirectory: File, paramcrash: CrashReport): number;
    static useShaderTransparency(): boolean;
    constructor(gameConfig: GameConfig)
    // private allowsChat: boolean;
    // private allowsMultiplayer: boolean;
    readonly atlasManager: AtlasManager;
    // private attackCancelled: boolean;
    readonly blockColors: BlockColors;
    readonly blockEntityRenderDispatcher: BlockEntityRenderDispatcher;
    blockModelResolver: BlockModelResolver;
    // private canary: number;
    readonly chatListener: ChatListener;
    // private clientLevelTeardownInProgress: boolean;
    clientStartTimeMs: number;
    // private clientTickCount: number;
    // private commandHistory: CommandHistory;
    crosshairPickEntity: Entity;
    // private currentFrameProfile: TimerQuery$FrameProfile;
    debugEntries: DebugScreenEntryList;
    readonly deltaTracker: DeltaTracker$Timer;
    readonly demo: boolean;
    // private directoryValidator: DirectoryValidator;
    readonly downloadedPackSource: DownloadedPackSource;
    // private drainedLatestTickGizmos: SimpleGizmoCollector$GizmoInstance[];
    readonly entityRenderDispatcher: EntityRenderDispatcher;
    // private fences: LongArrayFIFOQueue;
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
    levelRenderer: LevelRenderer;
    readonly levelSource: LevelStorageSource;
    readonly mainRenderTarget: RenderTarget;
    readonly mapRenderer: MapRenderer;
    readonly mapTextureManager: MapTextureManager;
    // private metricsRecorder: MetricsRecorder;
    missTime: number;
    readonly modelManager: ModelManager;
    mouseHandler: MouseHandler;
    readonly musicManager: MusicManager;
    readonly narrator: GameNarrator;
    readonly offlineDeveloperMode: boolean;
    options: Options;
    readonly overlay: Overlay;
    // private packetProcessor: PacketProcessor;
    particleEngine: ParticleEngine;
    // private particleResources: ParticleResources;
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
    // private recursiveScreenOpening: boolean;
    // private regionalCompliancies: PeriodicNotificationManager;
    // private reloadStateTracker: ResourceLoadStateTracker;
    // private renderBuffers: RenderBuffers;
    readonly reportingContext: ReportingContext;
    readonly resourceManager: ReloadableResourceManager;
    readonly resourcePackDirectory: Path[];
    readonly resourcePackRepository: PackRepository;
    // private rightClickDelay: number;
    readonly running: boolean;
    // private savedCpuDuration: number;
    screen: Screen;
    services: Services;
    readonly shaderManager: ShaderManager;
    readonly singleplayerServer: IntegratedServer;
    readonly skinManager: SkinManager;
    smartCull: boolean;
    // private socialInteractionsToast: TutorialToast;
    readonly soundManager: SoundManager;
    readonly splashManager: SplashManager;
    readonly telemetryManager: ClientTelemetryManager;
    // private textInputManager: TextInputManager;
    readonly textureManager: TextureManager;
    // private tickingScreen: Screen;
    readonly toastManager: ToastManager;
    // private tracyFrameCapture: TracyFrameCapture;
    readonly tutorial: Tutorial;
    user: User;
    // private userApiService: UserApiService;
    // private userPropertiesFuture: CompletableFuture<UserApiService$UserProperties>;
    readonly vanillaPackResources: VanillaPackResources;
    readonly versionType: string;
    readonly waypointStyles: WaypointStyleManager;
    readonly window: Window;
    wireframe: boolean;
    // private abortResourcePackRecovery(): void;
    // private addInitialScreens(screens: (param0: () => void) => Screen[]): boolean;
    // private addResourcePackLoadFailToast(message: Component): void;
    allowsMultiplayer(): boolean;
    allowsRealms(): boolean;
    allowsTelemetry(): boolean;
    // private archiveProfilingReport(systemReport: SystemReport, profilingResultPaths: Path[][]): Path[];
    // private buildInitialScreens(cookie: Minecraft$GameLoadCookie): () => void;
    canInterruptScreen(): boolean;
    canSwitchGameMode(): boolean;
    clearClientLevel(screen: Screen): void;
    clearDownloadedResourcePacks(): void;
    clearResourcePacksOnError(t: Throwable, message: Component, loadCookie: Minecraft$GameLoadCookie): void;
    close(): void;
    collectPerTickGizmos(): Gizmos$TemporaryCollection;
    commandHistory(): CommandHistory;
    computeChatAbilities(): ChatAbilities;
    // private constructProfiler(shouldCollectFrameProfile: boolean, tickProfiler: SingleTickProfiler): ProfilerFiller;
    // private continueAttack(down: boolean): void;
    // private createTitle(): string;
    // private createUserApiService(authService: YggdrasilAuthenticationService, config: GameConfig): UserApiService;
    createWorldOpenFlows(): WorldOpenFlows;
    cursorEntered(): void;
    // private debugClientMetricsCancel(): void;
    debugClientMetricsStart(debugFeedback: (param0: Component) => void): boolean;
    // private debugClientMetricsStop(): void;
    delayCrash(crash: CrashReport): void;
    delayTextureReload(): CompletableFuture<void>;
    destroy(): void;
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
    extraTelemetryAvailable(): boolean;
    fillReport(report: CrashReport): CrashReport;
    // private fillUptime(category: CrashReportCategory): void;
    // private finishProfilers(shouldCollectFrameProfile: boolean, tickProfiler: SingleTickProfiler): void;
    getAtlasManager(): AtlasManager;
    getBlockColors(): BlockColors;
    getBlockEntityRenderDispatcher(): BlockEntityRenderDispatcher;
    getCameraEntity(): Entity;
    getChatListener(): ChatListener;
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
    getMainRenderTarget(): RenderTarget;
    getMapRenderer(): MapRenderer;
    getMapTextureManager(): MapTextureManager;
    getModelManager(): ModelManager;
    getMusicManager(): MusicManager;
    getMusicVolume(): number;
    getNarrator(): GameNarrator;
    getOverlay(): Overlay;
    getPerTickGizmos(): E[];
    getPlayerSocialManager(): PlayerSocialManager;
    getProfileKeyPairManager(): ProfileKeyPairManager;
    getProxy(): Proxy;
    // private getQuickActionsDialog(): Optional<Holder<Dialog>>;
    getReportingContext(): ReportingContext;
    getResourceManager(): ResourceManager;
    getResourcePackDirectory(): Path[];
    getResourcePackRepository(): PackRepository;
    getRunningThread(): Thread;
    getShaderManager(): ShaderManager;
    getSingleplayerServer(): IntegratedServer;
    getSituationalMusic(): Music;
    getSkinManager(): SkinManager;
    getSoundManager(): SoundManager;
    getSplashManager(): SplashManager;
    getTelemetryManager(): ClientTelemetryManager;
    getTextureManager(): TextureManager;
    // private getTickTargetMillis(defaultTickTargetMillis: number): number;
    getToastManager(): ToastManager;
    getTutorial(): Tutorial;
    getUser(): User;
    getVanillaPackResources(): VanillaPackResources;
    getVersionType(): string;
    getWaypointStyles(): WaypointStyleManager;
    getWindow(): Window;
    grabPanoramixScreenshot(folder: File): Component;
    // private handleKeybinds(): void;
    hasAltDown(): boolean;
    hasControlDown(): boolean;
    hasShiftDown(): boolean;
    hasSingleplayerServer(): boolean;
    isBlocked(uuid: UUID): boolean;
    isDemo(): boolean;
    isEnforceUnicode(): boolean;
    isGameLoadFinished(): boolean;
    // private isLevelRunningNormally(): boolean;
    // private isLocalOrUnknownPlayer(uuid: UUID): boolean;
    isLocalPlayer(profileId: UUID): boolean;
    isLocalServer(): boolean;
    // private isMultiplayerServer(): boolean;
    isNameBanned(): boolean;
    isOfflineDeveloperMode(): boolean;
    isPaused(): boolean;
    isRunning(): boolean;
    isSingleplayer(): boolean;
    isTextFilteringEnabled(): boolean;
    isWindowActive(): boolean;
    multiplayerBan(): BanDetails;
    // private onFullscreenError(error: number, description: number): void;
    // private onGameLoadFinished(cookie: Minecraft$GameLoadCookie): void;
    // private onResourceLoadFinished(loadCookie: Minecraft$GameLoadCookie): void;
    onTextInputFocusChange(element: GuiEventListener, isFocused: boolean): void;
    openChatScreen(chatMethod: ChatComponent$ChatMethod): void;
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
    // private reloadResourcePacks(isRecovery: boolean, loadCookie: Minecraft$GameLoadCookie): CompletableFuture<void>;
    renderBuffers(): RenderBuffers;
    // private renderFrame(advanceGameTime: boolean): void;
    resizeGui(): void;
    // private rollbackResourcePacks(t: Throwable, loadCookie: Minecraft$GameLoadCookie): void;
    run(): void;
    // private runTick(advanceGameTime: boolean): void;
    // private selfTest(): void;
    sendLowDiskSpaceWarning(): void;
    setCameraEntity(cameraEntity: Entity): void;
    setLastInputType(lastInputType: InputType): void;
    setLevel(level: ClientLevel): void;
    setOverlay(overlay: Overlay): void;
    setScreen(screen: Screen): void;
    setScreenAndShow(screen: Screen): void;
    shouldEntityAppearGlowing(entity: Entity): boolean;
    shouldRun(task: () => void): boolean;
    showOnlyReducedInfo(): boolean;
    // private startAttack(): boolean;
    // private startUseItem(): void;
    stop(): void;
    telemetryOptInExtra(): boolean;
    textInputManager(): TextInputManager;
    tick(): void;
    triggerResourcePackRecovery(exception: Exception): void;
    updateFontOptions(): void;
    // private updateLevelInEngines(level: ClientLevel): void;
    // private updateLevelInEngines(level: ClientLevel, stopSound: boolean): void;
    updateMaxMipLevel(mipmapLevels: number): void;
    updateReportEnvironment(environment: ReportEnvironment): void;
    updateTitle(): void;
    // private userProperties(): UserApiService$UserProperties;
    // private viaFabricPlus$canReachAround(arg0: Entity): boolean;
    wrapRunnable(runnable: () => void): () => void;
}