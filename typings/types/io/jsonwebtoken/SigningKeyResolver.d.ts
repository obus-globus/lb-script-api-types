import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SigningKeyResolver extends Object{
    resolveSigningKey(arg0: { [key: string]: any }, arg1: { [key: string]: any }): Key;
    resolveSigningKey(arg0: { [key: string]: any }, arg1: number[]): Key;
}