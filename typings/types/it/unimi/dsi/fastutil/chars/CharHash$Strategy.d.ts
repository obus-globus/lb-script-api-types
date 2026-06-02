import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharHash$Strategy extends Object{
    equals(arg0: string, arg1: string): boolean;
    hashCode(arg0: string): number;
}