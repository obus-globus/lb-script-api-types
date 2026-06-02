import type { JwkBuilder } from '../../../io/jsonwebtoken/security/JwkBuilder.d.ts'
import type { X509Builder } from '../../../io/jsonwebtoken/security/X509Builder.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AsymmetricJwkBuilder<K extends Key, J extends AsymmetricJwk<K>, T extends AsymmetricJwkBuilder<K, J, T>> extends JwkBuilder<K, J, T>, X509Builder<T>, Object{
    publicKeyUse(arg0: string): T;
}