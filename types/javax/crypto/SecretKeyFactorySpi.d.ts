import type { Class } from '../../java/lang/Class.d.ts'
import type { KeySpec } from '../../java/security/spec/KeySpec.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class SecretKeyFactorySpi extends Object {
    constructor()
    engineGenerateSecret(arg0: KeySpec): SecretKey;
    engineGetKeySpec(arg0: SecretKey, arg1: Class<Object>): KeySpec;
    engineTranslateKey(arg0: SecretKey): SecretKey;
}