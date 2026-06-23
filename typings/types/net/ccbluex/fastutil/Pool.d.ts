import type { Object } from '../../../java/lang/Object.d.ts'
export interface Pool<E extends unknown> extends Object{
    borrow(): E;
    borrowInto(destination: E[], count: number): void;
    clear(): number;
    clearInto(destination: E[]): number;
    recycle(value: E): void;
    recycleAll(values: E[]): void;
    synchronized(): Pool<E>;
}