import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { DynamicJwkBuilder } from '../../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultDynamicJwkBuilder$Supplier<K extends Key, J extends JavaMap<any, any>> extends Object implements Supplier<DynamicJwkBuilder<K, J>> {
    constructor()
    get(): DynamicJwkBuilder<K, J>;
}