import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Pair$Mu } from '../../../../com/mojang/datafixers/util/Pair$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pair<F extends unknown, S extends unknown> extends Object implements App<Pair$Mu<S>, F> {
    static of<F extends unknown, S extends unknown>(paramarg0: F, paramarg1: S): Pair<F, S>;
    static toMap<F extends unknown, S extends unknown>(): Collector<Pair<F, S>, Object, JavaMap<F, S>>;
    static unbox<F extends unknown, S extends unknown>(paramarg0: App<Pair$Mu<S>, F>): Pair<F, S>;
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