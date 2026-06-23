import type { LocatorAdapter } from '../../../../io/jsonwebtoken/LocatorAdapter.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
export class ConstantKeyLocator extends LocatorAdapter<Key> implements Function<{ [key: string]: any }, Key> {
    constructor(arg0: Key, arg1: Key)
    // private jweKey: Key;
    // private jwsKey: Key;
    apply(arg0: { [key: string]: any }): Key;
    locate(arg0: { [key: string]: any }): Key;
}