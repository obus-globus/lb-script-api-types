import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { AbstractEngineCacheSupport$CompilePolicy } from '../../../../com/oracle/truffle/runtime/AbstractEngineCacheSupport$CompilePolicy.d.ts'
import type { EngineCacheSupport } from '../../../../com/oracle/truffle/runtime/EngineCacheSupport.d.ts'
import type { EngineData } from '../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
import type { Engine$CancellationCallback } from '../../../../org/graalvm/polyglot/Engine$CancellationCallback.d.ts'
export abstract class AbstractEngineCacheSupport extends Object implements EngineCacheSupport {
    constructor()
    // private cancelCompilations(e: EngineData, callTargets: OptimizedCallTarget[]): void;
    // private compileTargets(e: EngineData, compileQueue: OptimizedCallTarget[], useLastTier: boolean): void;
    getTraceOption(): OptionKey<boolean>;
    // private invalidateCompilations(e: EngineData, callTargets: OptimizedCallTarget[], cancelledPredicate: () => boolean): void;
    isStoreEnabled(options: OptionValues): boolean;
    onEngineClosed(e: EngineData): void;
    onEngineClosing(e: EngineData): boolean;
    onEngineCreated(e: EngineData): void;
    onEnginePatch(e: EngineData): void;
    onStoreCache(e: EngineData, path: Path, cancelledWord: number): boolean;
    persistCache(e: EngineData, callback: () => boolean): ByteBuffer;
    prepareEngine(e: EngineData, mode: AbstractEngineCacheSupport$CompilePolicy, useLastTier: boolean, preinitializeContext: boolean): Object;
    prepareEngine(e: EngineData, mode: AbstractEngineCacheSupport$CompilePolicy, useLastTier: boolean, preinitializeContext: boolean, cancelledPredicate: () => boolean): Object;
    // private prepareTargetsForCompilation(e: EngineData, callTargets: OptimizedCallTarget[], mode: AbstractEngineCacheSupport$CompilePolicy, cancelledPredicate: () => boolean): OptimizedCallTarget[];
    restoreEngine(e: EngineData): void;
    trace(e: EngineData, message: string, ...arguments: Object[]): void;
    traceLoad(options: OptionValues, loggerFactory: (param0: string) => TruffleLogger, message: string, ...arguments: Object[]): void;
}