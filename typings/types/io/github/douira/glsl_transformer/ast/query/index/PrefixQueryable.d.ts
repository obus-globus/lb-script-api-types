import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface PrefixQueryable<S extends E[], E extends unknown> extends Object{
    prefixQuery(arg0: string): Stream<S>;
    prefixQueryFlat(arg0: string): Stream<E>;
}