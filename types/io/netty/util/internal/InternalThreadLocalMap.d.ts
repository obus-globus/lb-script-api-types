import type { IntegerHolder } from '../../../../io/netty/util/internal/IntegerHolder.d.ts'
import type { ThreadLocalRandom } from '../../../../io/netty/util/internal/ThreadLocalRandom.d.ts'
import type { TypeParameterMatcher } from '../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { UnpaddedInternalThreadLocalMap } from '../../../../io/netty/util/internal/UnpaddedInternalThreadLocalMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternalThreadLocalMap extends UnpaddedInternalThreadLocalMap {
    static UNSET: Object;
    static VARIABLES_TO_REMOVE_INDEX: number;
    static destroy(): void;
    static get(): InternalThreadLocalMap;
    static getIfSet(): InternalThreadLocalMap;
    static lastVariableIndex(): number;
    static nextVariableIndex(): number;
    static remove(): void;
    private constructor()
    // private arrayList: Object[];
    // private charsetDecoderCache: Map<Charset, CharsetDecoder>;
    // private charsetEncoderCache: Map<Charset, CharsetEncoder>;
    // private cleanerFlags: BitSet;
    readonly futureListenerStackDepth: number;
    // private handlerSharableCache: Map<Class<Object>, boolean>;
    // private indexedVariables: Object[];
    readonly localChannelReaderStackDepth: number;
    rp1: number;
    rp2: number;
    rp3: number;
    rp4: number;
    rp5: number;
    rp6: number;
    rp7: number;
    rp8: number;
    // private stringBuilder: StringBuilder;
    // private typeParameterMatcherFindCache: Map<Class<Object>, { [key: string]: TypeParameterMatcher }>;
    // private typeParameterMatcherGetCache: Map<Class<Object>, TypeParameterMatcher>;
    arrayList(): E[];
    arrayList(arg0: number): E[];
    charsetDecoderCache(): Map<Charset, CharsetDecoder>;
    charsetEncoderCache(): Map<Charset, CharsetEncoder>;
    counterHashCode(): IntegerHolder;
    // private expandIndexedVariableTableAndSet(arg0: number, arg1: Object): void;
    futureListenerStackDepth(): number;
    getAndSetIndexedVariable(arg0: number, arg1: Object): Object;
    handlerSharableCache(): Map<Class<Object>, boolean>;
    indexedVariable(arg0: number): Object;
    isCleanerFlagSet(arg0: number): boolean;
    isIndexedVariableSet(arg0: number): boolean;
    localChannelReaderStackDepth(): number;
    random(): ThreadLocalRandom;
    removeIndexedVariable(arg0: number): Object;
    setCleanerFlag(arg0: number): void;
    setCounterHashCode(arg0: IntegerHolder): void;
    setFutureListenerStackDepth(arg0: number): void;
    setIndexedVariable(arg0: number, arg1: Object): boolean;
    setLocalChannelReaderStackDepth(arg0: number): void;
    size(): number;
    stringBuilder(): StringBuilder;
    typeParameterMatcherFindCache(): Map<Class<Object>, { [key: string]: TypeParameterMatcher }>;
    typeParameterMatcherGetCache(): Map<Class<Object>, TypeParameterMatcher>;
}