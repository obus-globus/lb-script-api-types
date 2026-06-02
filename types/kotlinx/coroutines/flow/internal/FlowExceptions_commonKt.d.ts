import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbortFlowException } from '../../../../kotlinx/coroutines/flow/internal/AbortFlowException.d.ts'
export class FlowExceptions_commonKt extends Object {
    static checkIndexOverflow(paramarg0: number): number;
    static checkOwnership(paramarg0: AbortFlowException, paramarg1: Object): void;
}