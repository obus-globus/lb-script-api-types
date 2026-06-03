import type { LocatorAdapter } from '../../../../io/jsonwebtoken/LocatorAdapter.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
export class ConstantKeyLocator extends LocatorAdapter<Key> implements Function<Header, Key> {
    constructor(arg0: Key, arg1: Key)
    // private jweKey: Key;
    // private jwsKey: Key;
    apply(arg0: Header): Key;
    locate(arg0: Header): Key;
    locate(arg0: JweHeader): Key;
    locate(arg0: JwsHeader): Key;
    locate(arg0: ProtectedHeader): Key;
}