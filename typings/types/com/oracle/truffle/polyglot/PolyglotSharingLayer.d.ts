import type { TruffleLanguage$ContextPolicy } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextPolicy.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { OptionValuesImpl } from '../../../../com/oracle/truffle/polyglot/OptionValuesImpl.d.ts'
import type { PolyglotContextConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotSharingLayer$Shared } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer$Shared.d.ts'
import type { PolyglotSourceCache } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache.d.ts'
import type { AssertionError } from '../../../../java/lang/AssertionError.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class PolyglotSharingLayer extends Object {
    static invalidSharingError(paramnode: Node, parampreviousLayer: PolyglotSharingLayer, paramcurrentLayer: PolyglotSharingLayer): AssertionError;
    constructor(engine: PolyglotEngineImpl)
    // private engine: PolyglotEngineImpl;
    // private hostLanguage: PolyglotLanguageInstance;
    // private shared: PolyglotSharingLayer$Shared;
    allocateHostLanguage(language: PolyglotLanguage): PolyglotLanguageInstance;
    allocateInstance(context: PolyglotContextImpl, language: PolyglotLanguage): PolyglotLanguageInstance;
    claimLayerForContext(sharableLayer: PolyglotSharingLayer, context: PolyglotContextImpl, requestingLanguages: PolyglotLanguage[]): boolean;
    // private collectLanguageOptions(config: PolyglotContextConfig, forcedLanguages: PolyglotLanguage[]): Map<PolyglotLanguage, OptionValuesImpl>;
    equals(obj: Object | null): boolean;
    freeSharingLayer(context: PolyglotContextImpl): void;
    getContextPolicy(): TruffleLanguage$ContextPolicy;
    getFastThreadLocals(): Object[];
    getInstance(language: PolyglotLanguage): PolyglotLanguageInstance;
    getSingleConstantContext(): PolyglotContextImpl;
    getSingleConstantLanguageContext(language: PolyglotLanguage): PolyglotLanguageContext;
    getSourceCache(): PolyglotSourceCache;
    hashCode(): number;
    isClaimed(): boolean;
    isSingleContext(): boolean;
    listCachedSources(sources: Object[]): void;
    loadPreinitializedContext(config: PolyglotContextConfig): PolyglotContextImpl;
    patchHostLanguage(language: PolyglotLanguage): PolyglotLanguageInstance;
    preInitialize(): void;
    toString(): string;
    // private trace(context: PolyglotContextImpl, s: PolyglotSharingLayer$Shared, label: string, message: string): void;
    // private traceAllocateLanguageInstance(context: PolyglotContextImpl, language: PolyglotLanguage): void;
    // private traceClaimLayer(success: boolean, s: PolyglotSharingLayer$Shared, context: PolyglotContextImpl, requestingLangauges: PolyglotLanguage[], previousOptions: Map<PolyglotLanguage, OptionValuesImpl>): void;
    // private traceCompatibility(s: PolyglotSharingLayer$Shared, context: PolyglotContextImpl, previousOptions: Map<PolyglotLanguage, OptionValuesImpl>, entry: Map$Entry<PolyglotLanguage, OptionValuesImpl>): void;
    // private traceContextPreinit(success: boolean, s: PolyglotSharingLayer$Shared, context: PolyglotContextImpl, previousOptions: Map<PolyglotLanguage, OptionValuesImpl>, newLanguageOptions: Map<PolyglotLanguage, OptionValuesImpl>): void;
    // private traceFreeLayer(context: PolyglotContextImpl): void;
}