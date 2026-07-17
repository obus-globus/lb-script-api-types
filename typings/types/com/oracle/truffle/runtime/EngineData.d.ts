import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { OptimizedRuntimeOptions$ExceptionAction } from '../../../../com/oracle/truffle/runtime/OptimizedRuntimeOptions$ExceptionAction.d.ts'
import type { TruffleSplittingStrategy$SplitStatisticsData } from '../../../../com/oracle/truffle/runtime/TruffleSplittingStrategy$SplitStatisticsData.d.ts'
import type { StatisticsListener } from '../../../../com/oracle/truffle/runtime/debug/StatisticsListener.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../org/graalvm/collections/Pair.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
import type { Engine$CancellationCallback } from '../../../../org/graalvm/polyglot/Engine$CancellationCallback.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export class EngineData extends Object {
    constructor(polyglotEngine: Object, runtimeOptions: OptionValues, loggerFactory: (param0: string) => TruffleLogger, sandboxPolicy: SandboxPolicy)
    argumentTypeSpeculation: boolean;
    backgroundCompilation: boolean;
    callAndLoopThresholdInFirstTier: number;
    callAndLoopThresholdInInterpreter: number;
    callTargetStatisticDetails: boolean;
    callTargetStatistics: boolean;
    callThresholdInFirstTier: number;
    callThresholdInInterpreter: number;
    cancelledPredicate: () => boolean;
    readonly closed: boolean;
    compilation: boolean;
    compilationFailureAction: OptimizedRuntimeOptions$ExceptionAction;
    compileAOTOnCreate: boolean;
    compileImmediately: boolean;
    compileOnly: string;
    readonly compilerOptions: JavaMap<string, string>;
    // private engineLocals: JavaMap<Class<Object>, Object>;
    engineOptions: OptionValues;
    firstTierOnly: boolean;
    id: number;
    interpreterCallStackHeadRoom: number;
    // private logShutdownCompilations: AtomicBoolean;
    // private loggerFactory: (param0: string) => TruffleLogger;
    maximumCompilations: number;
    multiTier: boolean;
    // private parsedCompileOnly: Pair<string[], string[]>;
    // private patchEpochNanos: number;
    readonly polyglotEngine: Object;
    priorityQueue: boolean;
    profilingEnabled: boolean;
    propagateCallAndLoopCount: boolean;
    propagateCallAndLoopCountMaxDepth: number;
    returnTypeSpeculation: boolean;
    // private splitCount: number;
    // private splitLimit: number;
    splitting: boolean;
    splittingAllowForcedSplits: boolean;
    splittingDumpDecisions: boolean;
    splittingGrowthLimit: number;
    splittingMaxCalleeSize: number;
    splittingMaxPropagationDepth: number;
    // private splittingStatistics: TruffleSplittingStrategy$SplitStatisticsData;
    splittingTraceEvents: boolean;
    statisticsListener: StatisticsListener;
    stoppedCompilationRetryDelay: number;
    traceCompilation: boolean;
    traceCompilationDetails: boolean;
    traceDeoptimizeFrame: boolean;
    traceSplits: boolean;
    traceSplittingSummary: boolean;
    traceTransferToInterpreter: boolean;
    traversingFirstTierBonus: number;
    traversingFirstTierPriority: boolean;
    traversingInvalidatedBonus: number;
    traversingOSRBonus: number;
    traversingRateHalfLifeNs: number;
    traversingStaleTaskMaxNoActivityNs: number;
    weightingBothTiers: boolean;
    acceptForCompilation(target: OptimizedCallTarget): boolean;
    clearEngineLocal(symbol: Class<Object>): void;
    // private computeCallAndLoopThresholdInFirstTier(options: OptionValues): number;
    // private computeCallAndLoopThresholdInInterpreter(options: OptionValues): number;
    // private computeCallThresholdInFirstTier(options: OptionValues): number;
    // private computeCallThresholdInInterpreter(options: OptionValues): number;
    ensureClosed(): void;
    enterLanguage(language: TruffleLanguage<Object>): Object;
    finalizeStore(): Object;
    getCallTargets(): OptimizedCallTarget[];
    // private getCompileOnly(): Pair<string[], string[]>;
    getCompilerOptions(): JavaMap<string, string>;
    getEngineLocal<T extends unknown>(symbol: Class<T>): T;
    getEngineLock(): Object;
    getEngineLogHandler(): Object;
    getEngineLogger(): TruffleLogger;
    getEngineOptions(): OptionValues;
    getLanguage(target: OptimizedCallTarget): TruffleLanguage<Object>;
    getLogger(loggerId: string): TruffleLogger;
    getPolyglotEngine(): Object;
    isClosed(): boolean;
    leaveLanguage(language: TruffleLanguage<Object>, prev: Object): void;
    // private loadOptions(options: OptionValues, sandboxPolicy: SandboxPolicy): void;
    logShutdownCompilations(): AtomicBoolean;
    mergeLoadedSources(sources: Source[]): void;
    onEngineClosed(): void;
    onEngineClosing(): boolean;
    onEngineCreated(engine: Object): void;
    onEnginePatch(newRuntimeOptions: OptionValues, newLoggerFactory: (param0: string) => TruffleLogger, sandboxPolicy: SandboxPolicy): void;
    onEnginePatchSuccess(): void;
    onStoreCache(targetPath: Path, cancelledWord: number): boolean;
    persistCache(callback: () => boolean): ByteBuffer;
    preinitializeContext(): void;
    putEngineLocal<T extends unknown>(symbol: Class<T>, value: T): void;
    restoreStore(finalizationResult: Object): void;
    // private updateCompilerOptions(options: JavaMap<string, string>): void;
    // private validateOptions(sandboxPolicy: SandboxPolicy): void;
}