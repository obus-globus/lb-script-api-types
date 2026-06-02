import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Funnels$SequentialFunnel<E extends Object | number | string | boolean> extends Object implements Funnel<E[]> {
    constructor(elementFunnel: Funnel<E>)
    // private elementFunnel: Funnel<E>;
    equals(o: Object | null): boolean;
    funnel(from: E[], into: PrimitiveSink): void;
    hashCode(): number;
    toString(): string;
}