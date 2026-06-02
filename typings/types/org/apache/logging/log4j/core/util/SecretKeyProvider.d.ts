import type { SecretKey } from '../../../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface SecretKeyProvider extends Object{
    getSecretKey(): SecretKey;
}