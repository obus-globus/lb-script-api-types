import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PointFreeRule extends Object{
    rewrite<A extends Object | number | string | boolean>(arg0: PointFree<A>): Optional<PointFree<A>>;
    rewriteOrNop<A extends Object | number | string | boolean>(arg0: PointFree<A>): PointFree<A>;
}