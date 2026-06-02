import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Memoizer extends Object {
    static defaultExpiration(): number;
    static installedAppsExpiration(): number;
    static memoize(paramarg0: () => Object | null): () => Object | null;
    static memoize(paramarg0: () => Object | null, paramarg1: number): () => Object | null;
    private constructor()
}