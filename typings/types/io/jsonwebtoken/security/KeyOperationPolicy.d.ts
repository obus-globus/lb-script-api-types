import type { KeyOperation } from '../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyOperationPolicy extends Object{
    getOperations(): KeyOperation[];
    validate(arg0: KeyOperation[]): void;
}