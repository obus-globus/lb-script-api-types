import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PointFree<T extends Object | number | string | boolean> extends Object {
    static indent(paramarg0: number): string;
    constructor()
    // private initialized: boolean;
    // private value: (param0: DynamicOps<Object>) => T;
    all(arg0: PointFreeRule): Optional<PointFree<T>>;
    eval(): (param0: DynamicOps<Object>) => T;
    evalCached(): (param0: DynamicOps<Object>) => T;
    one(arg0: PointFreeRule): Optional<PointFree<T>>;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<T>;
}