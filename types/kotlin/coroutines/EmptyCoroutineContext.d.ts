import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class EmptyCoroutineContext extends Object implements Serializable, CoroutineContext {
    static INSTANCE: EmptyCoroutineContext;
    // private serialVersionUID: number;
    fold<R extends Object | number | string | boolean>(initial: R, operation: Function2<R, CoroutineContext$Element, R>): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    hashCode(): number;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    plus(context: CoroutineContext): CoroutineContext;
    plus(context: CoroutineContext): CoroutineContext;
    // private readResolve(): Object;
    toString(): string;
}