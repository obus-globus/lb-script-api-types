import type { View$Mu } from '../../../com/mojang/datafixers/View$Mu.d.ts'
import type { PointFree } from '../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule } from '../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { App2 } from '../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class View<A extends unknown, B extends unknown> extends Record implements App2<View$Mu, A, B> {
    static create<A extends unknown, B extends unknown>(paramarg0: PointFree<(param0: A) => B>): View<A, B>;
    static create<A extends unknown, B extends unknown>(paramarg0: string, paramarg1: Type<A>, paramarg2: Type<B>, paramarg3: (param0: DynamicOps<Object>) => Function<A, B>): View<A, B>;
    static nopView<A extends unknown>(paramarg0: Type<A>): View<A, A>;
    constructor(function_: PointFree<(param0: A) => B>)
    // private function: PointFree<(param0: A) => B>;
    compose<C extends unknown>(arg0: View<C, A>): View<C, B>;
    equals(arg0: Object | null): boolean;
    flatMap<C extends unknown>(arg0: (param0: Type<B>) => View<B, C>): View<A, C>;
    funcType(): Type<(param0: A) => B>;
    function(): PointFree<(param0: A) => B>;
    hashCode(): number;
    isNop(): boolean;
    newType(): Type<B>;
    rewrite(arg0: PointFreeRule): Optional<View<A, B>>;
    rewriteOrNop(arg0: PointFreeRule): View<A, B>;
    toString(): string;
    type(): Type<A>;
}