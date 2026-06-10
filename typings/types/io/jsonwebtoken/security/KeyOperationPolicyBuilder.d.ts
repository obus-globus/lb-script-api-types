import type { Builder } from '../../../io/jsonwebtoken/lang/Builder.d.ts'
import type { CollectionMutator } from '../../../io/jsonwebtoken/lang/CollectionMutator.d.ts'
import type { KeyOperation } from '../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { KeyOperationPolicy } from '../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyOperationPolicyBuilder extends Builder<KeyOperationPolicy>, CollectionMutator<KeyOperation, KeyOperationPolicyBuilder>, Object{
    add(arg0: KeyOperation[]): KeyOperationPolicyBuilder;
    add(arg0: KeyOperation): KeyOperationPolicyBuilder;
    unrelated(): KeyOperationPolicyBuilder;
}