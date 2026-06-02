import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pool } from '../../../net/ccbluex/fastutil/Pool.d.ts'
import type { Pool$Companion } from '../../../net/ccbluex/fastutil/Pool$Companion.d.ts'
export class Pool$Sync<E extends Object | number | string | boolean> extends Object implements Pool<E> {
    static Companion: Pool$Companion;
    static create(paramarg0: () => Object | null): Pool<Object>;
    static create(paramarg0: () => Object | null, paramarg1: (param0: Object | null) => void): Pool<Object>;
    constructor(delegate: Pool<E>)
    // private delegate: Pool<E>;
    borrow(): E;
    borrowInto(destination: E[], count: number): void;
    clear(): number;
    clearInto(destination: E[]): number;
    recycle(value: E): void;
    recycleAll(values: E[]): void;
    synchronized(): Pool<E>;
    synchronized(): Pool<E>;
}