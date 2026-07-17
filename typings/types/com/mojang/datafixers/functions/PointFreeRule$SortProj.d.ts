import type { Apply } from '../../../../com/mojang/datafixers/functions/Apply.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule$CompRewrite } from '../../../../com/mojang/datafixers/functions/PointFreeRule$CompRewrite.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PointFreeRule$SortProj extends Enum<PointFreeRule$SortProj> implements PointFreeRule$CompRewrite {
    static INSTANCE: PointFreeRule$SortProj;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PointFreeRule$SortProj;
    static values(): PointFreeRule$SortProj[];
    private constructor()
    // private cap<R extends unknown>(arg0: Apply<Object, Object>, arg1: Apply<Object, Object>): R;
    doRewrite(arg0: PointFree<(param0: Object | null) => Object | null>, arg1: PointFree<(param0: Object | null) => Object | null>): Optional<PointFree<(param0: Object | null) => Object | null>>;
    rewrite<A extends unknown>(arg0: PointFree<A>): Optional<PointFree<A>>;
    // private rewrite(arg0: PointFree<(param0: Object | null) => Object | null>[]): Optional<PointFree<(param0: Object | null) => Object | null>[]>;
    name(): "INSTANCE";
}