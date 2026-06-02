import type { KeyOperation } from '../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { KeyOperationBuilder } from '../../../io/jsonwebtoken/security/KeyOperationBuilder.d.ts'
import type { KeyOperationPolicyBuilder } from '../../../io/jsonwebtoken/security/KeyOperationPolicyBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Jwks$OP extends Object {
    static DECRYPT: KeyOperation;
    static DERIVE_BITS: KeyOperation;
    static DERIVE_KEY: KeyOperation;
    static ENCRYPT: KeyOperation;
    static SIGN: KeyOperation;
    static UNWRAP_KEY: KeyOperation;
    static VERIFY: KeyOperation;
    static WRAP_KEY: KeyOperation;
    static builder(): KeyOperationBuilder;
    static get(): { [key: string]: KeyOperation };
    static policy(): KeyOperationPolicyBuilder;
    private constructor()
}