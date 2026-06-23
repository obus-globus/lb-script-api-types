import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { EngineData } from '../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { OptimizedRuntimeServiceProvider } from '../../../../com/oracle/truffle/runtime/OptimizedRuntimeServiceProvider.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
export interface EngineCacheSupport extends OptimizedRuntimeServiceProvider, Object {
    getEngineOptions(): OptionDescriptor[];
    getPriority(): number;
    isStoreEnabled(options: OptionValues): boolean;
    onEngineClosed(e: EngineData): void;
    onEngineClosing(e: EngineData): boolean;
    onEngineCreated(e: EngineData): void;
    onEnginePatch(e: EngineData): void;
    onStoreCache(e: EngineData, path: Path[], cancelledWord: number): boolean;
    tryLoadingCachedEngine(options: OptionValues, loggerFactory: (param0: string) => TruffleLogger): Object;
}