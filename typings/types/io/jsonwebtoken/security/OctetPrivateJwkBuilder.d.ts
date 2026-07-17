import type { JavaMap } from '../../../JavaMap.d.ts'
import type { PrivateJwkBuilder } from '../../../io/jsonwebtoken/security/PrivateJwkBuilder.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface OctetPrivateJwkBuilder<K extends PrivateKey, L extends PublicKey> extends PrivateJwkBuilder<K, L, JavaMap<any, any>, JavaMap<K, L>, OctetPrivateJwkBuilder<K, L>>, Object{
}