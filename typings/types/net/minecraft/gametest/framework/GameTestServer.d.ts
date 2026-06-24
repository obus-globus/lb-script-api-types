import type { Stopwatch } from '../../../../com/google/common/base/Stopwatch.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { SystemReport } from '../../../../net/minecraft/SystemReport.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { MultipleTestTracker } from '../../../../net/minecraft/gametest/framework/MultipleTestTracker.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { WorldStem } from '../../../../net/minecraft/server/WorldStem.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { PackRepository } from '../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { LevelBasedPermissionSet } from '../../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { LocalSampleLogger } from '../../../../net/minecraft/util/debugchart/LocalSampleLogger.d.ts'
import type { SampleLogger } from '../../../../net/minecraft/util/debugchart/SampleLogger.d.ts'
import type { LevelSettings } from '../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { WorldDataConfiguration } from '../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { GameRules } from '../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class GameTestServer extends MinecraftServer {
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
    static create(paramserverThread: Thread, paramlevelStorageSource: LevelStorageSource$LevelStorageAccess, parampackRepository: PackRepository, paramtestSelection: Optional<string>, paramverify: boolean, paramrepeatCount: number): GameTestServer;
    static getTestsForSelection(paramregistries: RegistryAccess, paramselection: string): Stream<Holder$Reference<GameTestInstance>>;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    static spin(paramfactory: (param0: Thread) => MinecraftServer | null): MinecraftServer | null;
    private constructor(serverThread: Thread, levelStorageSource: LevelStorageSource$LevelStorageAccess, packRepository: PackRepository, worldStem: WorldStem, testSelection: Optional<string>, verify: boolean, repeatCount: number)
    // private repeatCount: number;
    // private sampleLogger: LocalSampleLogger;
    // private stopwatch: Stopwatch;
    // private testBatches: GameTestBatch[];
    // private testSelection: Optional<string>;
    // private testTracker: MultipleTestTracker;
    // private verify: boolean;
    // private evaluateTestsToRun(level: ServerLevel): GameTestBatch[];
    fillServerSystemReport(systemReport: SystemReport): SystemReport;
    getChatSpamThresholdSeconds(): number;
    getCommandSpamThresholdSeconds(): number;
    getFunctionCompilationPermissions(): PermissionSet;
    getMaxPlayers(): number;
    getRateLimitPacketsPerSecond(): number;
    getTickTimeLogger(): SampleLogger;
    // private haveTestsStarted(): boolean;
    initServer(): boolean;
    isDedicatedServer(): boolean;
    isHardcore(): boolean;
    isPublished(): boolean;
    isSingleplayerOwner(nameAndId: NameAndId): boolean;
    isTickTimeLoggingEnabled(): boolean;
    // private multiplyTest(test: Holder$Reference<GameTestInstance>, level: ServerLevel): Stream<GameTestInfo>;
    onServerCrash(report: CrashReport): void;
    onServerExit(): void;
    operatorUserPermissions(): LevelBasedPermissionSet;
    shouldInformAdmins(): boolean;
    shouldRconBroadcast(): boolean;
    // private startTests(level: ServerLevel): void;
    tickServer(haveTime: () => boolean): void;
    useNativeTransport(): boolean;
    waitUntilNextTick(): void;
}