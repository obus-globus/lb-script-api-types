import type { PrivateJwkBuilder } from '../../../io/jsonwebtoken/security/PrivateJwkBuilder.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface OctetPrivateJwkBuilder<K extends PrivateKey, L extends PublicKey> extends PrivateJwkBuilder<K, L, { [key: string]: any }, Map<K, L>, OctetPrivateJwkBuilder<K, L>>, Object{
}