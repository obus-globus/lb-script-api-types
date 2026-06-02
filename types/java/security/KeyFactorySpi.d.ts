import type { Class } from '../../java/lang/Class.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { PrivateKey } from '../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../java/security/PublicKey.d.ts'
import type { KeySpec } from '../../java/security/spec/KeySpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class KeyFactorySpi extends Object {
    constructor()
    engineGeneratePrivate(arg0: KeySpec): PrivateKey;
    engineGeneratePublic(arg0: KeySpec): PublicKey;
    engineGetKeySpec<T extends KeySpec>(arg0: Key, arg1: Class<T>): T;
    engineTranslateKey(arg0: Key): Key;
}