import type { CollectionConverter$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectionConverter$CreateListFunction<A extends unknown> extends Object implements Function<number, A[]> {
    private constructor()
    constructor(arg0: CollectionConverter$1)
    apply(arg0: number): A[];
}