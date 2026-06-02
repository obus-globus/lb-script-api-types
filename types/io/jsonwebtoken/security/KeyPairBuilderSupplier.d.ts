import type { KeyPairBuilder } from '../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyPairBuilderSupplier extends Object{
    keyPair(): KeyPairBuilder;
}