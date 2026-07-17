import type { JavaMap } from '../../JavaMap.d.ts'
import type { SigningKeyResolver } from '../../io/jsonwebtoken/SigningKeyResolver.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SigningKeyResolverAdapter extends Object implements SigningKeyResolver {
    constructor()
    resolveSigningKey(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>): Key;
    resolveSigningKey(arg0: JavaMap<any, any>, arg1: number[]): Key;
    resolveSigningKeyBytes(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>): number[];
    resolveSigningKeyBytes(arg0: JavaMap<any, any>, arg1: number[]): number[];
}