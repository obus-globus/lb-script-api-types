import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class CoroutineContextImplKt extends Object {
    static getPolymorphicElement<E extends CoroutineContext$Element>(self: CoroutineContext$Element, key: CoroutineContext$Key<E>): E | null;
    static minusPolymorphicKey(self: CoroutineContext$Element, key: CoroutineContext$Key<any>): CoroutineContext;
}