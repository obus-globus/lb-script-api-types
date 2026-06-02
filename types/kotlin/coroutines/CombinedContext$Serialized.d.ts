import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CombinedContext$Serialized$Companion } from '../../kotlin/coroutines/CombinedContext$Serialized$Companion.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
export class CombinedContext$Serialized extends Object implements Serializable {
    static Companion: CombinedContext$Serialized$Companion;
    constructor(elements: CoroutineContext[])
    readonly elements: CoroutineContext[];
    // private readResolve(): Object;
}