import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { KeyOperationPolicyBuilder } from '../../../../io/jsonwebtoken/security/KeyOperationPolicyBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyOperationPolicyBuilder$Supplier extends Object implements Supplier<KeyOperationPolicyBuilder> {
    constructor()
    get(): KeyOperationPolicyBuilder;
}