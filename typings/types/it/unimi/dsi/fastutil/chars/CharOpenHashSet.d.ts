import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharOpenHashSet {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_GROWTH_FACTOR: number;
    static DEFAULT_INITIAL_SIZE: number;
    static DEFAULT_LOAD_FACTOR: number;
    static FAST_LOAD_FACTOR: number;
    static FREE: number;
    static OCCUPIED: number;
    static PRIMES: number[];
    static REMOVED: number;
    static VERY_FAST_LOAD_FACTOR: number;
    static of(): (Object | null)[];
    static of(paramarg0: string): (Object | null)[];
    static of(paramarg0: string, paramarg1: string): (Object | null)[];
    static of(paramarg0: string, paramarg1: string, paramarg2: string): (Object | null)[];
    static of(...paramarg0: string[]): (Object | null)[];
}