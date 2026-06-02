import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SigningKeyResolver extends Object{
    resolveSigningKey(arg0: JwsHeader, arg1: Claims): Key;
    resolveSigningKey(arg0: JwsHeader, arg1: number[]): Key;
}