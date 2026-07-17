import type { OptimizedRuntimeOptions$EngineModeEnum } from '../../../../com/oracle/truffle/runtime/OptimizedRuntimeOptions$EngineModeEnum.d.ts'
import type { OptimizedRuntimeOptions$ExceptionAction } from '../../../../com/oracle/truffle/runtime/OptimizedRuntimeOptions$ExceptionAction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
export class OptimizedRuntimeOptions extends Object {
    static ArgumentTypeSpeculation: OptionKey<boolean>;
    static BackgroundCompilation: OptionKey<boolean>;
    static Compilation: OptionKey<boolean>;
    static CompilationFailureAction: OptionKey<OptimizedRuntimeOptions$ExceptionAction>;
    static CompilationStatisticDetails: OptionKey<boolean>;
    static CompilationStatistics: OptionKey<boolean>;
    static CompileAOTOnCreate: OptionKey<boolean>;
    static CompileImmediately: OptionKey<boolean>;
    static CompileOnly: OptionKey<string>;
    static CompilerIdleDelay: OptionKey<number>;
    static CompilerThreadStackSize: OptionKey<number>;
    static CompilerThreads: OptionKey<number>;
    static DynamicCompilationThresholds: OptionKey<boolean>;
    static DynamicCompilationThresholdsHighLoadSlope: OptionKey<number>;
    static DynamicCompilationThresholdsMaxNormalLoad: OptionKey<number>;
    static DynamicCompilationThresholdsMinNormalLoad: OptionKey<number>;
    static DynamicCompilationThresholdsMinScale: OptionKey<number>;
    static EncodedGraphCachePurgeDelay: OptionKey<number>;
    static FirstTierBackedgeCounts: OptionKey<boolean>;
    static FirstTierCompilationThreshold: OptionKey<number>;
    static FirstTierMinInvokeThreshold: OptionKey<number>;
    static LastTierCompilationThreshold: OptionKey<number>;
    static MaximumCompilations: OptionKey<number>;
    static MinInvokeThreshold: OptionKey<number>;
    static Mode: OptionKey<OptimizedRuntimeOptions$EngineModeEnum>;
    static MultiTier: OptionKey<boolean>;
    static OSR: OptionKey<boolean>;
    static OSRCompilationThreshold: OptionKey<number>;
    static OSRMaxCompilationReAttempts: OptionKey<number>;
    static PartialBlockCompilation: OptionKey<boolean>;
    static PartialBlockCompilationSize: OptionKey<number>;
    static PartialBlockMaximumSize: OptionKey<number>;
    static PriorityQueue: OptionKey<boolean>;
    static Profiling: OptionKey<boolean>;
    static PropagateLoopCountToLexicalSingleCaller: OptionKey<boolean>;
    static PropagateLoopCountToLexicalSingleCallerMaxDepth: OptionKey<number>;
    static ReturnTypeSpeculation: OptionKey<boolean>;
    static SingleTierCompilationThreshold: OptionKey<number>;
    static Splitting: OptionKey<boolean>;
    static SplittingAllowForcedSplits: OptionKey<boolean>;
    static SplittingDumpDecisions: OptionKey<boolean>;
    static SplittingGrowthLimit: OptionKey<number>;
    static SplittingMaxCalleeSize: OptionKey<number>;
    static SplittingMaxPropagationDepth: OptionKey<number>;
    static SplittingTraceEvents: OptionKey<boolean>;
    static StoppedCompilationRetryDelay: OptionKey<number>;
    static ThrowOnMaxOSRCompilationReAttemptsReached: OptionKey<boolean>;
    static TraceAssumptions: OptionKey<boolean>;
    static TraceCompilation: OptionKey<boolean>;
    static TraceCompilationAST: OptionKey<boolean>;
    static TraceCompilationDetails: OptionKey<boolean>;
    static TraceCompilationPolymorphism: OptionKey<boolean>;
    static TraceDeoptimizeFrame: OptionKey<boolean>;
    static TraceSplitting: OptionKey<boolean>;
    static TraceSplittingSummary: OptionKey<boolean>;
    static TraceStackTraceLimit: OptionKey<number>;
    static TraceTransferToInterpreter: OptionKey<boolean>;
    static TraversingCompilationQueue: OptionKey<boolean>;
    static TraversingQueueFirstTierBonus: OptionKey<number>;
    static TraversingQueueFirstTierPriority: OptionKey<boolean>;
    static TraversingQueueInvalidatedBonus: OptionKey<number>;
    static TraversingQueueOSRBonus: OptionKey<number>;
    static TraversingQueueRateHalfLife: OptionKey<number>;
    static TraversingQueueStaleTaskDelay: OptionKey<number>;
    static TraversingQueueWeightingBothTiers: OptionKey<boolean>;
    static getDescriptors(): OptionDescriptor[];
    constructor()
}