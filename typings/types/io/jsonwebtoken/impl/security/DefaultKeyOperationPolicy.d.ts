import type { KeyOperation } from '../../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyOperationPolicy extends Object implements KeyOperationPolicy {
    constructor(arg0: KeyOperation[], arg1: boolean)
    // private allowUnrelated: boolean;
    // private ops: KeyOperation[];
    equals(arg0: Object | null): boolean;
    getOperations(): KeyOperation[];
    hashCode(): number;
    validate(arg0: KeyOperation[]): void;
}