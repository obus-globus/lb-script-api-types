import type { DoubleStream } from '../../../../../java/util/stream/DoubleStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleImmutableList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(): (Object | null)[];
    static of(...paramarg0: number[]): (Object | null)[];
    static toList(paramarg0: DoubleStream): (Object | null)[];
    static toListWithExpectedSize(paramarg0: DoubleStream, paramarg1: number): (Object | null)[];
}