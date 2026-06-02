import type { AsymmetricJwkBuilder } from '../../../io/jsonwebtoken/security/AsymmetricJwkBuilder.d.ts'
import type { PrivateJwkBuilder } from '../../../io/jsonwebtoken/security/PrivateJwkBuilder.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PublicJwkBuilder<K extends PublicKey, L extends PrivateKey, J extends PublicJwk<K>, M extends Map<L, K>, P extends PrivateJwkBuilder<L, K, J, M, P>, T extends PublicJwkBuilder<K, L, J, M, P, T>> extends AsymmetricJwkBuilder<K, J, T>, Object{
    privateKey(arg0: L): P;
}