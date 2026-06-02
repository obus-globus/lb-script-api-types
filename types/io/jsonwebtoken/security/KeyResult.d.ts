import type { KeySupplier } from '../../../io/jsonwebtoken/security/KeySupplier.d.ts'
import type { Message } from '../../../io/jsonwebtoken/security/Message.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyResult extends KeySupplier<SecretKey>, Message<number[]>, Object{
}