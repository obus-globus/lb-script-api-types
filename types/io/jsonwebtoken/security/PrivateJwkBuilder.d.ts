import type { AsymmetricJwkBuilder } from '../../../io/jsonwebtoken/security/AsymmetricJwkBuilder.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrivateJwkBuilder<K extends PrivateKey, L extends PublicKey, J extends PublicJwk<L>, M extends Map<K, L>, T extends PrivateJwkBuilder<K, L, J, M, T>> extends AsymmetricJwkBuilder<K, M, T>, Object{
    publicKey(arg0: L): T;
}