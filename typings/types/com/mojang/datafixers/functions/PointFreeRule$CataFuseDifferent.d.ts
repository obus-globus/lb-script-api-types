import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule$CompRewrite } from '../../../../com/mojang/datafixers/functions/PointFreeRule$CompRewrite.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PointFreeRule$CataFuseDifferent extends Enum<PointFreeRule$CataFuseDifferent> implements PointFreeRule$CompRewrite {
    static INSTANCE: PointFreeRule$CataFuseDifferent;
    static together(...paramarg0: PointFreeRule$CompRewrite[]): PointFreeRule$CompRewrite;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PointFreeRule$CataFuseDifferent;
    static values(): PointFreeRule$CataFuseDifferent[];
    private constructor()
    doRewrite(arg0: PointFree<(param0: Object | null) => Object | null>, arg1: PointFree<(param0: Object | null) => Object | null>): Optional<PointFree<(param0: Object | null) => Object | null>>;
    rewrite<A extends unknown>(arg0: PointFree<A>): Optional<PointFree<A>>;
    // private rewrite(arg0: PointFree<(param0: Object | null) => Object | null>[]): Optional<PointFree<(param0: Object | null) => Object | null>[]>;
    name(): "INSTANCE";
}