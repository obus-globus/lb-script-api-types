import type { TruffleCompilationTask } from '../../../../../com/oracle/truffle/compiler/TruffleCompilationTask.d.ts'
import type { TruffleCompilerListener$CompilationResultInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$CompilationResultInfo.d.ts'
import type { TruffleCompilerListener$GraphInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$GraphInfo.d.ts'
import type { AbstractCompilationTask } from '../../../../../com/oracle/truffle/runtime/AbstractCompilationTask.d.ts'
import type { AbstractGraalTruffleRuntimeListener } from '../../../../../com/oracle/truffle/runtime/AbstractGraalTruffleRuntimeListener.d.ts'
import type { EngineData } from '../../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { OptimizedDirectCallNode } from '../../../../../com/oracle/truffle/runtime/OptimizedDirectCallNode.d.ts'
import type { OptimizedTruffleRuntime } from '../../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntime.d.ts'
import type { TruffleInlining } from '../../../../../com/oracle/truffle/runtime/TruffleInlining.d.ts'
import type { StatisticsListener$CompilationStatistics } from '../../../../../com/oracle/truffle/runtime/debug/StatisticsListener$CompilationStatistics.d.ts'
import type { StatisticsListener$CurrentCompilationStatistics } from '../../../../../com/oracle/truffle/runtime/debug/StatisticsListener$CurrentCompilationStatistics.d.ts'
import type { StatisticsListener$IdentityStatistics } from '../../../../../com/oracle/truffle/runtime/debug/StatisticsListener$IdentityStatistics.d.ts'
import type { StatisticsListener$TargetIntStatistics } from '../../../../../com/oracle/truffle/runtime/debug/StatisticsListener$TargetIntStatistics.d.ts'
import type { StatisticsListener$TargetLongStatistics } from '../../../../../com/oracle/truffle/runtime/debug/StatisticsListener$TargetLongStatistics.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class StatisticsListener extends AbstractGraalTruffleRuntimeListener {
    static createEngineListener(paramruntime: OptimizedTruffleRuntime): StatisticsListener;
    static install(paramruntime: OptimizedTruffleRuntime): void;
    private constructor(runtime: OptimizedTruffleRuntime)
    // private callCount: StatisticsListener$TargetIntStatistics;
    // private callCountDirect: StatisticsListener$TargetIntStatistics;
    // private callCountDirectCloned: StatisticsListener$TargetIntStatistics;
    // private callCountDirectDispatched: StatisticsListener$TargetIntStatistics;
    // private callCountDirectInlined: StatisticsListener$TargetIntStatistics;
    // private callCountDirectNotCloned: StatisticsListener$TargetIntStatistics;
    // private callCountIndirect: StatisticsListener$TargetIntStatistics;
    // private compilations: number;
    // private currentCompilationStatistics: ThreadLocal<StatisticsListener$CurrentCompilationStatistics>;
    // private dequeuedReasons: StatisticsListener$IdentityStatistics<string>;
    // private dequeues: number;
    // private failureReasons: StatisticsListener$IdentityStatistics<string>;
    // private failures: number;
    // private firstCompilation: number;
    // private invalidatedReasons: StatisticsListener$IdentityStatistics<string>;
    // private invalidations: number;
    // private loopCount: StatisticsListener$TargetIntStatistics;
    // private nodeCount: StatisticsListener$TargetIntStatistics;
    // private nodeStatistics: StatisticsListener$IdentityStatistics<Class<Object>>;
    // private permanentBailoutReasons: StatisticsListener$IdentityStatistics<string>;
    // private permanentBailouts: number;
    // private queues: number;
    // private splits: number;
    // private success: number;
    // private temporaryBailoutReasons: StatisticsListener$IdentityStatistics<string>;
    // private temporaryBailouts: number;
    // private tieredStatistics: StatisticsListener$CompilationStatistics[];
    // private timeInQueue: StatisticsListener$TargetLongStatistics;
    // private timeQueued: Map<OptimizedCallTarget, number>;
    // private timeToQueue: StatisticsListener$TargetLongStatistics;
    // private getStatisticsForTier(tier: number): StatisticsListener$CompilationStatistics;
    onCompilationDequeued(target: OptimizedCallTarget, source: Object, reason: CharSequence, tier: number): void;
    onCompilationFailed(target: OptimizedCallTarget, reason: string, bailout: boolean, permanentBailout: boolean): void;
    onCompilationFailed(target: OptimizedCallTarget, reason: string, bailout: boolean, permanentBailout: boolean, tier: number): void;
    onCompilationFailed(target: OptimizedCallTarget, reason: string, bailout: boolean, permanentBailout: boolean, tier: number, lazyStackTrace: () => string): void;
    onCompilationGraalTierFinished(target: OptimizedCallTarget, graph: TruffleCompilerListener$GraphInfo): void;
    onCompilationInvalidated(target: OptimizedCallTarget, source: Object, reason: CharSequence): void;
    onCompilationQueued(target: OptimizedCallTarget, tier: number): void;
    onCompilationSplit(callNode: OptimizedDirectCallNode): void;
    onCompilationStarted(target: OptimizedCallTarget, task: TruffleCompilationTask): void;
    onCompilationStarted(target: OptimizedCallTarget, task: AbstractCompilationTask): void;
    onCompilationStarted(target: OptimizedCallTarget, tier: number): void;
    onCompilationSuccess(target: OptimizedCallTarget, task: AbstractCompilationTask, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo): void;
    onCompilationSuccess(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo): void;
    onCompilationSuccess(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo, tier: number): void;
    onCompilationTruffleTierFinished(target: OptimizedCallTarget, task: AbstractCompilationTask, graph: TruffleCompilerListener$GraphInfo): void;
    onCompilationTruffleTierFinished(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo): void;
    onEngineClosed(runtimeData: EngineData): void;
    // private printStatistics(runtimeData: EngineData): void;
}