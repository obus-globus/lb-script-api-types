import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NamedParameterSpecValueFinder extends Object implements Function<Key, string> {
    constructor()
    apply(arg0: Key): string;
}