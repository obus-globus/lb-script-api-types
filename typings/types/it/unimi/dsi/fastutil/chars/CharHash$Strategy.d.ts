import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharHash$Strategy extends Object{
    equals(other: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    hashCode(): number;
    hashCode(arg0: string): number;
}