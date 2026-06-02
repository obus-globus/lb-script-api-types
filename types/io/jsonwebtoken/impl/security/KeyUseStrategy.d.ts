import type { KeyUsage } from '../../../../io/jsonwebtoken/impl/security/KeyUsage.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface KeyUseStrategy extends Object{
    toJwkValue(arg0: KeyUsage): string;
}