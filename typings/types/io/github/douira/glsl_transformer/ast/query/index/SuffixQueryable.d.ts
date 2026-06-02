import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface SuffixQueryable<S extends E[], E extends Object | number | string | boolean> extends Object{
    suffixQuery(arg0: string): Stream<S>;
    suffixQueryFlat(arg0: string): Stream<E>;
}