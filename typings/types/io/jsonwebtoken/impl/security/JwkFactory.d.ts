import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JwkFactory<K extends Key, J extends { [key: string]: any }> extends Object{
    createJwk(arg0: { [key: string]: any }): J;
    newContext(arg0: { [key: string]: any }, arg1: K): { [key: string]: any };
}