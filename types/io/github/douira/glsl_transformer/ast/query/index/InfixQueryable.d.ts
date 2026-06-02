import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface InfixQueryable<S extends E[], E extends Object | number | string | boolean> extends Object{
    infixQuery(arg0: string): Stream<S>;
    infixQueryFlat(arg0: string): Stream<E>;
}