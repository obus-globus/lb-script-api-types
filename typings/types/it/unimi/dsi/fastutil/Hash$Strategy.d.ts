import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Hash$Strategy<K extends Object | number | string | boolean> extends Object{
    equals(arg0: K, arg1: K): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    hashCode(arg0: K): number;
}