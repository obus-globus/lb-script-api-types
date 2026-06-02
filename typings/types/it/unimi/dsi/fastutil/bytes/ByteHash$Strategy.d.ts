import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteHash$Strategy extends Object{
    equals(arg0: number, arg1: number): boolean;
    hashCode(arg0: number): number;
}