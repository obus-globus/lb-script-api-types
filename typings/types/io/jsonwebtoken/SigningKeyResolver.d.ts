import type { JavaMap } from '../../JavaMap.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SigningKeyResolver extends Object{
    resolveSigningKey(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>): Key;
    resolveSigningKey(arg0: JavaMap<any, any>, arg1: number[]): Key;
}