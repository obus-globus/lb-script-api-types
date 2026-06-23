import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectionConverter$CreateSetFunction<T extends unknown> extends Object implements Function<number, T[]> {
    private constructor()
    apply(arg0: number): T[];
}