import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule$CompRewrite } from '../../../../com/mojang/datafixers/functions/PointFreeRule$CompRewrite.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PointFreeRule$LensComp extends Enum<PointFreeRule$LensComp> implements PointFreeRule$CompRewrite {
    static INSTANCE: PointFreeRule$LensComp;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PointFreeRule$LensComp;
    static values(): PointFreeRule$LensComp[];
    private constructor()
    // private capApp<R extends unknown, S extends unknown, T extends unknown, A extends unknown, B extends unknown>(arg0: TypedOptic<S, T, A, B>, arg1: PointFree<Object>): PointFree<R>;
    // private capComp<A extends unknown, C extends unknown>(arg0: PointFree<Object>, arg1: PointFree<Object>): PointFree<(param0: A) => C>;
    doRewrite(arg0: PointFree<(param0: Object | null) => Object | null>, arg1: PointFree<(param0: Object | null) => Object | null>): Optional<PointFree<(param0: Object | null) => Object | null>>;
    rewrite<A extends unknown>(arg0: PointFree<A>): Optional<PointFree<A>>;
    // private rewrite(arg0: PointFree<(param0: Object | null) => Object | null>[]): Optional<PointFree<(param0: Object | null) => Object | null>[]>;
    name(): "INSTANCE";
}