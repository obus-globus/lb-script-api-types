import type { SigningKeyResolver } from '../../io/jsonwebtoken/SigningKeyResolver.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SigningKeyResolverAdapter extends Object implements SigningKeyResolver {
    constructor()
    resolveSigningKey(arg0: { [key: string]: any }, arg1: { [key: string]: any }): Key;
    resolveSigningKey(arg0: { [key: string]: any }, arg1: number[]): Key;
    resolveSigningKeyBytes(arg0: { [key: string]: any }, arg1: { [key: string]: any }): number[];
    resolveSigningKeyBytes(arg0: { [key: string]: any }, arg1: number[]): number[];
}