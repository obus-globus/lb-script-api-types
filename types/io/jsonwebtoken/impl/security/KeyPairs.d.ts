import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeyPairs extends Object {
    static assertKey(paramarg0: Key, paramarg1: Class<Object>, paramarg2: string): Object | null;
    static getKey(paramarg0: KeyPair, paramarg1: Class<Object>): Object | null;
    private constructor()
}