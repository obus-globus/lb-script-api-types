import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanHash$Strategy extends Object{
    equals(other: Object | null): boolean;
    equals(arg0: boolean, arg1: boolean): boolean;
    hashCode(): number;
    hashCode(arg0: boolean): number;
}