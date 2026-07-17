import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JwkFactory<K extends Key, J extends JavaMap<any, any>> extends Object{
    createJwk(arg0: JavaMap<any, any>): J;
    newContext(arg0: JavaMap<any, any>, arg1: K): JavaMap<any, any>;
}