import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntHash$Strategy extends Object{
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    hashCode(): number;
    hashCode(arg0: number): number;
}