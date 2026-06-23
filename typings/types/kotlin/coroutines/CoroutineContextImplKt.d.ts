import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class CoroutineContextImplKt extends Object {
    static getPolymorphicElement(paramarg0: CoroutineContext$Element, paramarg1: CoroutineContext$Key<CoroutineContext$Element>): CoroutineContext$Element | null;
    static minusPolymorphicKey(paramarg0: CoroutineContext$Element, paramarg1: CoroutineContext$Key<any>): CoroutineContext;
}