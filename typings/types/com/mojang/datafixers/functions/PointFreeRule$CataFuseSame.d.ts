import type { RewriteResult } from '../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule$CompRewrite } from '../../../../com/mojang/datafixers/functions/PointFreeRule$CompRewrite.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PointFreeRule$CataFuseSame extends Enum<PointFreeRule$CataFuseSame> implements PointFreeRule$CompRewrite {
    static INSTANCE: PointFreeRule$CataFuseSame;
    static together(...paramarg0: PointFreeRule$CompRewrite[]): PointFreeRule$CompRewrite;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PointFreeRule$CataFuseSame;
    static values(): PointFreeRule$CataFuseSame[];
    private constructor()
    doRewrite(arg0: PointFree<(param0: Object | null) => Object | null>, arg1: PointFree<(param0: Object | null) => Object | null>): Optional<PointFree<(param0: Object | null) => Object | null>>;
    // private getCompose<B extends unknown>(arg0: RewriteResult<B, Object>, arg1: RewriteResult<Object, Object>): RewriteResult<Object, Object>;
    rewrite<A extends unknown>(arg0: PointFree<A>): Optional<PointFree<A>>;
    // private rewrite(arg0: PointFree<(param0: Object | null) => Object | null>[]): Optional<PointFree<(param0: Object | null) => Object | null>[]>;
    name(): "INSTANCE";
}