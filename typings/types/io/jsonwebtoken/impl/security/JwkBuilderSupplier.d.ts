import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { DynamicJwkBuilder } from '../../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JwkBuilderSupplier extends Object implements Supplier<DynamicJwkBuilder<any, any>> {
    static DEFAULT: JwkBuilderSupplier;
    constructor(arg0: JavaMap<any, any>, arg1: KeyOperationPolicy)
    // private operationPolicy: KeyOperationPolicy;
    // private provider: JavaMap<any, any>;
    get(): DynamicJwkBuilder<any, any>;
}