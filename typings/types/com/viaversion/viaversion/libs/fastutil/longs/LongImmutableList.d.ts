import type { LongStream } from '../../../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongImmutableList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(): (Object | null)[];
    static of(...paramarg0: number[]): (Object | null)[];
    static toList(paramarg0: LongStream): (Object | null)[];
    static toListWithExpectedSize(paramarg0: LongStream, paramarg1: number): (Object | null)[];
}