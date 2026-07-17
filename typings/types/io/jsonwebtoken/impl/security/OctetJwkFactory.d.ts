import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OctetJwkFactory<K extends Key, J extends JavaMap<any, any>> extends AbstractFamilyJwkFactory<K, J> {
    constructor(arg0: Class<K>, arg1: Parameter<Object>[])
    supports(arg0: JavaMap<any, any>): boolean;
    supports(arg0: Key): boolean;
}