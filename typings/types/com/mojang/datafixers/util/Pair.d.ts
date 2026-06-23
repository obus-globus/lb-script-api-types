import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Pair$Mu } from '../../../../com/mojang/datafixers/util/Pair$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair<F extends unknown, S extends unknown> extends Object implements App<Pair$Mu<S>, F> {
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static toMap(): Collector<Pair<Object, Object>, Object, Map<Object | null, Object | null>>;
    static unbox(paramarg0: App<Pair$Mu<Object>, Object>): Pair<Object, Object>;
    constructor(arg0: F, arg1: S)
    readonly first: F;
    readonly second: S;
    equals(arg0: Object | null): boolean;
    getFirst(): F;
    getSecond(): S;
    hashCode(): number;
    mapFirst<F2 extends unknown>(arg0: (param0: F) => F2): Pair<F2, S>;
    mapSecond<S2 extends unknown>(arg0: (param0: S) => S2): Pair<F, S2>;
    swap(): Pair<S, F>;
    toString(): string;
}