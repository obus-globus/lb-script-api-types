import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MurmurHash3 extends Object {
    static DEFAULT_SEED: number;
    static NULL_HASHCODE: number;
    static hash128(paramarg0: number[]): number[];
    static hash128(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number[];
    static hash128(paramarg0: string): number[];
    static hash128x64(paramarg0: number[]): number[];
    static hash128x64(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number[];
    static hash32(paramarg0: number[]): number;
    static hash32(paramarg0: number[], paramarg1: number): number;
    static hash32(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static hash32(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static hash32(paramarg0: string): number;
    static hash32(paramarg0: number): number;
    static hash32(paramarg0: number, paramarg1: number): number;
    static hash32(paramarg0: number, paramarg1: number): number;
    static hash32(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static hash32x86(paramarg0: number[]): number;
    static hash32x86(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static hash64(paramarg0: number[]): number;
    static hash64(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static hash64(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static hash64(paramarg0: number): number;
    static hash64(paramarg0: number): number;
    static hash64(paramarg0: number): number;
    private constructor()
}