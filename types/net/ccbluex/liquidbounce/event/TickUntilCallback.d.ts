import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { IntPredicate } from '../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CancellableContinuation } from '../../../../kotlinx/coroutines/CancellableContinuation.d.ts'
export class TickUntilCallback extends Object implements BooleanSupplier {
    constructor(continuation: CancellableContinuation<number>, stopAt: (param0: number) => kotlin.Boolean)
    // private continuation: CancellableContinuation<number>;
    // private elapsedTicks: number;
    // private stopAt: (param0: number) => kotlin.Boolean;
    getAsBoolean(): boolean;
    toString(): string;
}