import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { OptionValuesImpl } from '../../../../com/oracle/truffle/polyglot/OptionValuesImpl.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotImpl$VMObject } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl$VMObject.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLocals$LanguageContextLocal } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LanguageContextLocal.d.ts'
import type { PolyglotLocals$LanguageContextThreadLocal } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LanguageContextThreadLocal.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { PolyglotSourceCache$ParseOrigin } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$ParseOrigin.d.ts'
import type { PolyglotValueDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch.d.ts'
import type { WeakAssumedValue } from '../../../../com/oracle/truffle/polyglot/WeakAssumedValue.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../org/graalvm/collections/Pair.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class PolyglotLanguageInstance extends Object implements PolyglotImpl$VMObject {
    constructor(language: PolyglotLanguage, layer: PolyglotSharingLayer)
    // private callTargetCache: Map<Class<Object>, CallTarget>;
    // private contextLocalLocations: PolyglotLocals$LocalLocation[];
    // private contextLocals: PolyglotLocals$LanguageContextLocal<Object>[];
    // private contextThreadLocalLocations: PolyglotLocals$LocalLocation[];
    // private contextThreadLocals: PolyglotLocals$LanguageContextThreadLocal<Object>[];
    // private generatorCache: Map<Pair<Class<Object>, Class<Object>>, Object>;
    // private guestToHostCodeCache: Object;
    // private hostToGuestCodeCache: Map<Object, Object>;
    // private language: PolyglotLanguage;
    // private sharing: PolyglotSharingLayer;
    // private singleLanguageContext: WeakAssumedValue<PolyglotLanguageContext>;
    // private spi: TruffleLanguage<Object>;
    // private staticObjectClassLoaders: Map<Class<Object>, Object>;
    // private valueCache: Map<Class<Object>, PolyglotValueDispatch>;
    getAPIAccess(): AbstractPolyglotImpl$APIAccess;
    getEngine(): PolyglotEngineImpl;
    getGuestToHostCodeCache(): Object;
    getImpl(): PolyglotImpl;
    installCallTarget(rootNode: RootNode): CallTarget;
    installGuestToHostCodeCache(newCache: Object): Object;
    lookupCallTarget(rootNodeClass: Class<RootNode>): CallTarget;
    lookupValueCache(context: PolyglotContextImpl, guestValue: Object): PolyglotValueDispatch;
    // private lookupValueCacheImpl(guestValue: Object): PolyglotValueDispatch;
    parseSourceOptions(origin: PolyglotSourceCache$ParseOrigin, source: Source, componentOnly: string): OptionValuesImpl;
    toString(): string;
}