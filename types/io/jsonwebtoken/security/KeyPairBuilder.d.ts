import type { SecurityBuilder } from '../../../io/jsonwebtoken/security/SecurityBuilder.d.ts'
import type { KeyPair } from '../../../java/security/KeyPair.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyPairBuilder extends SecurityBuilder<KeyPair, KeyPairBuilder>, Object{
}