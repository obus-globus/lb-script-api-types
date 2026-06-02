import type { SigningKeyResolver } from '../../io/jsonwebtoken/SigningKeyResolver.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SigningKeyResolverAdapter extends Object implements SigningKeyResolver {
    constructor()
    resolveSigningKey(arg0: JwsHeader, arg1: Claims): Key;
    resolveSigningKey(arg0: JwsHeader, arg1: number[]): Key;
    resolveSigningKeyBytes(arg0: JwsHeader, arg1: Claims): number[];
    resolveSigningKeyBytes(arg0: JwsHeader, arg1: number[]): number[];
}