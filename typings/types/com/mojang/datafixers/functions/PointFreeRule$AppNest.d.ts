import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { ProfunctorTransformer } from '../../../../com/mojang/datafixers/functions/ProfunctorTransformer.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PointFreeRule$AppNest extends Enum<PointFreeRule$AppNest> implements PointFreeRule {
    static INSTANCE: PointFreeRule$AppNest;
    static all(paramarg0: PointFreeRule): PointFreeRule;
    static choice(...paramarg0: (Object | null)[]): PointFreeRule;
    static everywhere(paramarg0: PointFreeRule, paramarg1: PointFreeRule): PointFreeRule;
    static many(paramarg0: PointFreeRule): PointFreeRule;
    static nop(): PointFreeRule;
    static once(paramarg0: PointFreeRule): PointFreeRule;
    static one(paramarg0: PointFreeRule): PointFreeRule;
    static seq(...paramarg0: (Object | null)[]): PointFreeRule;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PointFreeRule$AppNest;
    static values(): (Object | null)[];
    private constructor()
    // private cap<R extends unknown, X extends unknown, Y extends unknown, S extends unknown, T extends unknown, A extends unknown, B extends unknown>(arg0: ProfunctorTransformer<X, Y, Object, Object>, arg1: ProfunctorTransformer<S, T, A, B>): R;
    // private compose<A extends unknown, C extends unknown>(arg0: PointFree<(param0: Object | null) => Object | null>, arg1: PointFree<(param0: Object | null) => Object | null>): PointFree<(param0: A) => C>;
    rewrite<A extends unknown>(arg0: PointFree<A>): Optional<PointFree<A>>;
    rewriteOrNop<A extends unknown>(arg0: PointFree<A>): PointFree<A>;
    name(): "INSTANCE";
}