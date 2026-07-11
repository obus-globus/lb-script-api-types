import type { Apply } from '../../../../com/mojang/datafixers/functions/Apply.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule$CompRewrite } from '../../../../com/mojang/datafixers/functions/PointFreeRule$CompRewrite.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PointFreeRule$SortInj extends Enum<PointFreeRule$SortInj> implements PointFreeRule$CompRewrite {
    static INSTANCE: PointFreeRule$SortInj;
    static together(...paramarg0: (Object | null)[]): PointFreeRule$CompRewrite;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PointFreeRule$SortInj;
    static values(): (Object | null)[];
    private constructor()
    // private cap<R extends unknown>(arg0: Apply<Object, Object>, arg1: Apply<Object, Object>): R;
    doRewrite(arg0: PointFree<(param0: Object | null) => Object | null>, arg1: PointFree<(param0: Object | null) => Object | null>): Optional<PointFree<(param0: Object | null) => Object | null>>;
    rewrite<A extends unknown>(arg0: PointFree<A>): Optional<PointFree<A>>;
    // private rewrite(arg0: PointFree<(param0: Object | null) => Object | null>[]): Optional<PointFree<(param0: Object | null) => Object | null>[]>;
    name(): "INSTANCE";
}