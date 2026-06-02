import type { KeyUsage } from '../../../../io/jsonwebtoken/impl/security/KeyUsage.d.ts'
import type { KeyUseStrategy } from '../../../../io/jsonwebtoken/impl/security/KeyUseStrategy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyUseStrategy extends Object implements KeyUseStrategy {
    constructor()
    toJwkValue(arg0: KeyUsage): string;
}