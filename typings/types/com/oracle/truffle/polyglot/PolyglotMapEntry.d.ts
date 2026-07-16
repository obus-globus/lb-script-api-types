import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotMapEntry$Cache } from '../../../../com/oracle/truffle/polyglot/PolyglotMapEntry$Cache.d.ts'
import type { PolyglotWrapper } from '../../../../com/oracle/truffle/polyglot/PolyglotWrapper.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
export class PolyglotMapEntry<K extends unknown, V extends unknown> extends Object implements PolyglotWrapper, Map$Entry<K, V> {
    static asInstance(paramv: Object): PolyglotWrapper;
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static equals(paramcontext: Object, paramreceiver: Object, paramobj: Object): boolean;
    static equalsProxy(paramwrapper: PolyglotWrapper, paramother: Object): boolean;
    static getHostProxy(paramv: Object): PolyglotWrapper;
    static hashCode(paramcontext: Object, paramreceiver: Object): number;
    static isHostProxy(paramv: Object): boolean;
    static isInstance(paramv: Object): boolean;
    static toString(paramthisObj: PolyglotWrapper): string;
    static toString(paramlanguageContext: Object, paramreceiver: Object): string;
    static toStringImpl(paramlanguageContext: Object, paramreceiver: Object): string;
    constructor(languageContext: PolyglotLanguageContext, obj: Object, keyClass: Class<K>, keyType: Type, valueClass: Class<V>, valueType: Type)
    // private cache: PolyglotMapEntry$Cache;
    // private contextAnchor: Context;
    readonly guestObject: Object;
    readonly key: K;
    readonly languageContext: PolyglotLanguageContext;
    readonly value: V;
    equals(o: Object | null): boolean;
    getContext(): PolyglotContextImpl;
    getGuestObject(): Object;
    getLanguageContext(): PolyglotLanguageContext;
    hashCode(): number;
    setValue(value: V): V;
    toString(): string;
}