import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pool } from '../../../net/ccbluex/fastutil/Pool.d.ts'
import type { Pool$Companion } from '../../../net/ccbluex/fastutil/Pool$Companion.d.ts'
export class Pool$ListBasedPool<E extends unknown> extends Object implements Pool<E> {
    static Companion: Pool$Companion;
    constructor(initializer: () => E, finalizer: (param0: E) => void)
    // private batchBorrowBuffer: E[] | null;
    // private finalizer: (param0: E) => void;
    // private initializer: () => E;
    // private stack: E[];
    borrow(): E;
    borrowInto(destination: E[], count: number): void;
    clear(): number;
    clearInto(destination: E[]): number;
    recycle(value: E): void;
    recycleAll(values: E[]): void;
    synchronized(): Pool<E>;
}