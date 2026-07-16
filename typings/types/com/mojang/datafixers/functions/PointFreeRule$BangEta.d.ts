import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PointFreeRule$BangEta extends Enum<PointFreeRule$BangEta> implements PointFreeRule {
    static INSTANCE: PointFreeRule$BangEta;
    static all(paramarg0: PointFreeRule): PointFreeRule;
    static choice(...paramarg0: PointFreeRule[]): PointFreeRule;
    static everywhere(paramarg0: PointFreeRule, paramarg1: PointFreeRule): PointFreeRule;
    static many(paramarg0: PointFreeRule): PointFreeRule;
    static nop(): PointFreeRule;
    static once(paramarg0: PointFreeRule): PointFreeRule;
    static one(paramarg0: PointFreeRule): PointFreeRule;
    static seq(...paramarg0: PointFreeRule[]): PointFreeRule;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PointFreeRule$BangEta;
    static values(): PointFreeRule$BangEta[];
    private constructor()
    rewrite<A extends unknown>(arg0: PointFree<A>): Optional<PointFree<A>>;
    rewriteOrNop<A extends unknown>(arg0: PointFree<A>): PointFree<A>;
    name(): "INSTANCE";
}