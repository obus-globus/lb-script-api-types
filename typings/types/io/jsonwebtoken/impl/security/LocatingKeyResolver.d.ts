import type { Locator } from '../../../../io/jsonwebtoken/Locator.d.ts'
import type { SigningKeyResolver } from '../../../../io/jsonwebtoken/SigningKeyResolver.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocatingKeyResolver extends Object implements SigningKeyResolver {
    constructor(arg0: Locator<Key>)
    // private locator: Locator<Key>;
    resolveSigningKey(arg0: { [key: string]: any }, arg1: { [key: string]: any }): Key;
    resolveSigningKey(arg0: { [key: string]: any }, arg1: number[]): Key;
}