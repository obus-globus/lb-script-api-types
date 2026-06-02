import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotMapEntry } from '../../../../com/oracle/truffle/polyglot/PolyglotMapEntry.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotMapEntryAndFunction<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends PolyglotMapEntry<K, V> implements Function<Object, Object> {
    static identity(): (param0: Object | null) => Object | null;
    constructor(languageContext: PolyglotLanguageContext, obj: Object, keyClass: Class<K>, keyType: Type, valueClass: Class<V>, valueType: Type)
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(t: Object): Object;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}