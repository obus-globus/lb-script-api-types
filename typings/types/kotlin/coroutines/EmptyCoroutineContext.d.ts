import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class EmptyCoroutineContext extends Object implements Serializable, CoroutineContext {
    static INSTANCE: EmptyCoroutineContext;
    // private serialVersionUID: number;
    fold<R extends unknown>(initial: R, operation: (param0: R, param1: CoroutineContext$Element) => R): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    hashCode(): number;
    minusKey(key: CoroutineContext$Key<any>): CoroutineContext;
    plus(context: CoroutineContext): CoroutineContext;
    // private readResolve(): Object;
    toString(): string;
}