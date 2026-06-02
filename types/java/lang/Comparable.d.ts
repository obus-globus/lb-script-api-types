import type { Object } from '../../java/lang/Object.d.ts'
export interface Comparable<T extends Object | number | string | boolean> extends Object{
    compareTo(other: T): number;
}