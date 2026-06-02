import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Pair$Mu } from '../../../../com/mojang/datafixers/util/Pair$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair<F extends Object | number | string | boolean, S extends Object | number | string | boolean> extends Object implements App<Pair$Mu<S>, F> {
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static toMap(): Collector<Object, Object, Object>;
    static unbox(paramarg0: App<Object, Object>): Pair<Object, Object>;
    constructor(arg0: F, arg1: S)
    readonly first: F;
    readonly second: S;
    equals(arg0: Object | null): boolean;
    getFirst(): F;
    getSecond(): S;
    hashCode(): number;
    mapFirst(arg0: (param0: F) => F2): Pair<F2, S>;
    mapSecond(arg0: (param0: S) => S2): Pair<F, S2>;
    swap(): Pair<S, F>;
    toString(): string;
}