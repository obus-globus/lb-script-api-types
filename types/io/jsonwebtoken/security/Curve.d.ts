import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { KeyPairBuilderSupplier } from '../../../io/jsonwebtoken/security/KeyPairBuilderSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Curve extends Identifiable, KeyPairBuilderSupplier, Object{
}