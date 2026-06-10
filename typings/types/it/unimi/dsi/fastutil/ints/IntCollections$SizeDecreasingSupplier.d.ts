import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntCollections$SizeDecreasingSupplier<C extends (Object | null)[]> extends Object implements Supplier<C> {
    constructor(arg0: number, arg1: (param0: number) => C)
    // private builder: (param0: number) => C;
    // private expectedFinalSize: number;
    // private suppliedCount: AtomicInteger;
    get(): C;
}