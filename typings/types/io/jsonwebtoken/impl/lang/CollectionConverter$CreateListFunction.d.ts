import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectionConverter$CreateListFunction<A extends Object | number | string | boolean> extends Object implements Function<number, A[]> {
    private constructor()
    apply(arg0: number): A[];
}