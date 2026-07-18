import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleLanguage$ContextPolicy } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextPolicy.d.ts'
import type { OptionValuesImpl } from '../../../../com/oracle/truffle/polyglot/OptionValuesImpl.d.ts'
import type { PolyglotContextConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig.d.ts'
import type { PolyglotContextConfig$PreinitConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig$PreinitConfig.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotSourceCache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache.d.ts'
import type { WeakAssumedValue } from '../../../../com/oracle/truffle/polyglot/WeakAssumedValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotSharingLayer$Shared extends Object {
    private constructor(engine: PolyglotEngineImpl, contextPolicy: TruffleLanguage$ContextPolicy, previousLanguageOptions: JavaMap<PolyglotLanguage, OptionValuesImpl>)
    // private claimedCount: number;
    // private contextPolicy: TruffleLanguage$ContextPolicy;
    // private fastThreadLocalsCache: Object[];
    // private id: number;
    // private instances: PolyglotLanguageInstance[];
    // private preInitializedContext: PolyglotContextImpl;
    // private preinitConfig: PolyglotContextConfig$PreinitConfig;
    // private previousLanguageOptions: JavaMap<PolyglotLanguage, OptionValuesImpl>;
    // private singleContextValue: WeakAssumedValue<PolyglotContextImpl>;
    // private sourceCache: PolyglotSourceCache;
    getFastThreadLocals(engine: PolyglotEngineImpl): Object[];
    resetFastThreadLocalsCache(): void;
    updatePreinitConfig(config: PolyglotContextConfig): void;
}