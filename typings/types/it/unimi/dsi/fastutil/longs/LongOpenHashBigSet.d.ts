import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongOpenHashBigSet {
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
    static toBigSet(paramarg0: LongStream): (Object | null)[];
    static toBigSetWithExpectedSize(paramarg0: LongStream, paramarg1: number): (Object | null)[];
}