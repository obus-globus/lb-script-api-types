import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotMapEntry } from '../../../../com/oracle/truffle/polyglot/PolyglotMapEntry.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotMapEntryAndFunction<K extends unknown, V extends unknown> extends PolyglotMapEntry<K, V> implements Function<Object, Object> {
    constructor(languageContext: PolyglotLanguageContext, obj: Object, keyClass: Class<K>, keyType: Type, valueClass: Class<V>, valueType: Type)
    andThen(arg0: (param0: Object) => V): (param0: Object) => V;
    apply(t: Object): Object;
    compose(arg0: (param0: V) => Object): (param0: V) => Object;
}