import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PointFreeRule$Choice2 extends Record implements PointFreeRule {
    static all(paramarg0: PointFreeRule): PointFreeRule;
    static choice(paramarg0: (Object | null)[]): PointFreeRule;
    static everywhere(paramarg0: PointFreeRule, paramarg1: PointFreeRule): PointFreeRule;
    static many(paramarg0: PointFreeRule): PointFreeRule;
    static nop(): PointFreeRule;
    static once(paramarg0: PointFreeRule): PointFreeRule;
    static one(paramarg0: PointFreeRule): PointFreeRule;
    static seq(paramarg0: (Object | null)[]): PointFreeRule;
    constructor(first: PointFreeRule, second: PointFreeRule)
    // private first: PointFreeRule;
    // private second: PointFreeRule;
    equals(arg0: Object | null): boolean;
    first(): PointFreeRule;
    hashCode(): number;
    rewrite<A extends Object | number | string | boolean>(arg0: PointFree<A>): Optional<PointFree<A>>;
    rewriteOrNop<A extends Object | number | string | boolean>(arg0: PointFree<A>): PointFree<A>;
    second(): PointFreeRule;
    toString(): string;
}