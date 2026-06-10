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
export class View<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Record implements App2<View$Mu, A, B> {
    static create(paramarg0: PointFree<(param0: Object | null) => Object | null>): View<Object, Object>;
    static create(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: DynamicOps<Object>) => Function<Object, Object>): View<Object, Object>;
    static nopView(paramarg0: Type<Object>): View<Object, Object>;
    constructor(function_: PointFree<(param0: A) => B>)
    // private function: PointFree<(param0: A) => B>;
    compose<C extends Object | number | string | boolean>(arg0: View<C, A>): View<C, B>;
    equals(arg0: Object | null): boolean;
    flatMap<C extends Object | number | string | boolean>(arg0: (param0: Type<B>) => View<B, C>): View<A, C>;
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