import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Memoizer extends Object {
    static defaultExpiration(): number;
    static installedAppsExpiration(): number;
    static memoize<T extends unknown>(paramarg0: () => T): () => T;
    static memoize<T extends unknown>(paramarg0: () => T, paramarg1: number): () => T;
    private constructor()
}