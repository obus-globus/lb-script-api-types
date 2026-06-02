import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyOperationPolicy extends Object implements KeyOperationPolicy {
    constructor(arg0: E[], arg1: boolean)
    // private allowUnrelated: boolean;
    // private ops: E[];
    equals(arg0: Object | null): boolean;
    getOperations(): E[];
    hashCode(): number;
    validate(arg0: E[]): void;
}