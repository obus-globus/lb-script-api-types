import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pool } from '../../../net/ccbluex/fastutil/Pool.d.ts'
import type { Pool$Companion } from '../../../net/ccbluex/fastutil/Pool$Companion.d.ts'
export class Pool$Sync<E extends unknown> extends Object implements Pool<E> {
    static Companion: Pool$Companion;
    constructor(delegate: Pool<E>)
    // private delegate: Pool<E>;
    borrow(): E;
    borrowInto(destination: E[], count: number): void;
    clear(): number;
    clearInto(destination: E[]): number;
    recycle(value: E): void;
    recycleAll(values: E[]): void;
    synchronized(): Pool<E>;
}