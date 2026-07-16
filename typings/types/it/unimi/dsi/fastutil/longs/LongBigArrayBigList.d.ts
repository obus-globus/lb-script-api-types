import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongBigArrayBigList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_INITIAL_CAPACITY: number;
    static of(): (Object | null)[];
    static of(...paramarg0: number[]): (Object | null)[];
    static toBigList(paramarg0: LongStream): (Object | null)[];
    static toBigListWithExpectedSize(paramarg0: LongStream, paramarg1: number): (Object | null)[];
    static wrap(paramarg0: number[][]): (Object | null)[];
    static wrap(paramarg0: number[][], paramarg1: number): (Object | null)[];
}