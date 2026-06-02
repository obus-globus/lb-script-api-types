import type { KeyOperationPolicy } from '../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyOperationPolicied<T extends KeyOperationPolicied<T>> extends Object{
    operationPolicy(arg0: KeyOperationPolicy): T;
}