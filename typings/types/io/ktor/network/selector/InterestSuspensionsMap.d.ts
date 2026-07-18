import type { InterestSuspensionsMap$Companion } from '../../../../io/ktor/network/selector/InterestSuspensionsMap$Companion.d.ts'
import type { SelectInterest } from '../../../../io/ktor/network/selector/SelectInterest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CancellableContinuation } from '../../../../kotlinx/coroutines/CancellableContinuation.d.ts'
export class InterestSuspensionsMap extends Object {
    static Companion: InterestSuspensionsMap$Companion;
    constructor()
    // private acceptHandlerReference: CancellableContinuation<void> | null;
    // private connectHandlerReference: CancellableContinuation<void> | null;
    // private readHandlerReference: CancellableContinuation<void> | null;
    // private writeHandlerReference: CancellableContinuation<void> | null;
    addSuspension(interest: SelectInterest, continuation: CancellableContinuation<void>): void;
    invokeForEachPresent(block: (param0: CancellableContinuation<void>, param1: SelectInterest) => void): void;
    invokeForEachPresent(readyOps: number, block: (param0: CancellableContinuation<void>) => void): void;
    removeSuspension(interest: SelectInterest): CancellableContinuation<void> | null;
    removeSuspension(interestOrdinal: number): CancellableContinuation<void> | null;
    toString(): string;
}