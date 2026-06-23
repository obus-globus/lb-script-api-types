import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface InvertedInfixQueryable<S extends E[], E extends unknown> extends Object{
    invertedInfixQuery(arg0: string, arg1: string): Stream<S>;
    invertedInfixQueryFlat(arg0: string, arg1: string): Stream<E>;
}