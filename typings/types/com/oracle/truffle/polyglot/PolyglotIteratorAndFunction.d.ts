import type { PolyglotIterator } from '../../../../com/oracle/truffle/polyglot/PolyglotIterator.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotIteratorAndFunction<T extends unknown> extends PolyglotIterator<T> implements Function<Object, Object> {
    constructor(elementClass: Class<T>, elementType: Type, iterable: Object, languageContext: PolyglotLanguageContext)
    andThen<V extends unknown>(arg0: (param0: Object) => V): (param0: Object) => V;
    apply(t: Object): Object;
    compose<V extends unknown>(arg0: (param0: V) => Object): (param0: V) => Object;
}