import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { AbstractEngineCacheSupport } from '../../../../com/oracle/truffle/runtime/AbstractEngineCacheSupport.d.ts'
import type { AbstractEngineCacheSupport$CompilePolicy } from '../../../../com/oracle/truffle/runtime/AbstractEngineCacheSupport$CompilePolicy.d.ts'
import type { EngineData } from '../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
export class DebugEngineCacheSupport extends AbstractEngineCacheSupport {
    static DebugCacheCompile: OptionKey<AbstractEngineCacheSupport$CompilePolicy>;
    static DebugCacheCompileUseLastTier: OptionKey<boolean>;
    static DebugCacheLoad: OptionKey<boolean>;
    static DebugCachePreinitializeContext: OptionKey<boolean>;
    static DebugCacheStore: OptionKey<boolean>;
    static DebugTraceCache: OptionKey<boolean>;
    constructor()
    getEngineOptions(): OptionDescriptor[];
    getPriority(): number;
    getTraceOption(): OptionKey<boolean>;
    isStoreEnabled(options: OptionValues): boolean;
    onEngineClosed(e: EngineData): void;
    onEngineClosing(e: EngineData): boolean;
    onEngineCreated(e: EngineData): void;
    onEnginePatch(e: EngineData): void;
    tryLoadingCachedEngine(options: OptionValues, loggerFactory: (param0: string) => TruffleLogger): Object;
}