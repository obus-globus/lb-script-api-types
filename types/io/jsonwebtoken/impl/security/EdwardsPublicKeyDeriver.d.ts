import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EdwardsPublicKeyDeriver extends Object implements Function<PrivateKey, PublicKey> {
    static INSTANCE: Function<PrivateKey, PublicKey>;
    private constructor()
    apply(arg0: PrivateKey): PublicKey;
}