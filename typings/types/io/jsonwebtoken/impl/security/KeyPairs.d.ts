import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeyPairs extends Object {
    static assertKey<K extends unknown>(paramarg0: Key, paramarg1: Class<K>, paramarg2: string): K;
    static getKey<K extends unknown>(paramarg0: KeyPair, paramarg1: Class<K>): K;
    private constructor()
}