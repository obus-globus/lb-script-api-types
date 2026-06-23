import type { Object } from '../../java/lang/Object.d.ts'
export interface Comparable<T extends unknown> extends Object{
    compareTo(other: T): number;
}