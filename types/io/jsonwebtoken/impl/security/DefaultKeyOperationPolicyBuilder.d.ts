import type { DefaultCollectionMutator } from '../../../../io/jsonwebtoken/impl/lang/DefaultCollectionMutator.d.ts'
import type { KeyOperation } from '../../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { KeyOperationPolicyBuilder } from '../../../../io/jsonwebtoken/security/KeyOperationPolicyBuilder.d.ts'
export class DefaultKeyOperationPolicyBuilder extends DefaultCollectionMutator<KeyOperation, KeyOperationPolicyBuilder> implements KeyOperationPolicyBuilder {
    constructor()
    // private unrelated: boolean;
    build(): KeyOperationPolicy;
    unrelated(): KeyOperationPolicyBuilder;
}