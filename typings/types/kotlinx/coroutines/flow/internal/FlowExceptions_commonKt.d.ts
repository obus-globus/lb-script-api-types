import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbortFlowException } from '../../../../kotlinx/coroutines/flow/internal/AbortFlowException.d.ts'
export class FlowExceptions_commonKt extends Object {
    static checkIndexOverflow(index: number): number;
    static checkOwnership(self: AbortFlowException, owner: Object): void;
}