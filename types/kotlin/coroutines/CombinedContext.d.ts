import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class CombinedContext extends Object implements Serializable, CoroutineContext {
    constructor(left: CoroutineContext, element: CoroutineContext$Element)
    // private element: CoroutineContext$Element;
    // private left: CoroutineContext;
    // private contains(element: CoroutineContext$Element): boolean;
    // private containsAll(context: CombinedContext): boolean;
    equals(other: Object | null): boolean;
    fold<R extends Object | number | string | boolean>(initial: R, operation: Function2<R, CoroutineContext$Element, R>): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    hashCode(): number;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    plus(context: CoroutineContext): CoroutineContext;
    // private readObject(input: ObjectInputStream): void;
    // private size(): number;
    toString(): string;
    // private writeReplace(): Object;
}