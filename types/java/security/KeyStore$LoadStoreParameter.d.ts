import type { KeyStore$ProtectionParameter } from '../../java/security/KeyStore$ProtectionParameter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface KeyStore$LoadStoreParameter extends Object{
    getProtectionParameter(): KeyStore$ProtectionParameter;
}