import type { JavaMap } from '../../../JavaMap.d.ts'
import type { OctetPrivateJwkBuilder } from '../../../io/jsonwebtoken/security/OctetPrivateJwkBuilder.d.ts'
import type { PublicJwkBuilder } from '../../../io/jsonwebtoken/security/PublicJwkBuilder.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface OctetPublicJwkBuilder<A extends PublicKey, B extends PrivateKey> extends PublicJwkBuilder<A, B, JavaMap<any, any>, JavaMap<B, A>, OctetPrivateJwkBuilder<B, A>, OctetPublicJwkBuilder<A, B>>, Object{
}