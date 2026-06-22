import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { KeyPairBuilder } from '../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { KeyPairBuilderSupplier } from '../../../io/jsonwebtoken/security/KeyPairBuilderSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Curve extends Identifiable, KeyPairBuilderSupplier, Object{
    getId(): string;
    keyPair(): KeyPairBuilder;
}