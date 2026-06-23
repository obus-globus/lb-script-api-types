import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { DynamicJwkBuilder } from '../../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { KeyOperationPolicy } from '../../../../io/jsonwebtoken/security/KeyOperationPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JwkBuilderSupplier extends Object implements Supplier<DynamicJwkBuilder<Object, Object>> {
    static DEFAULT: JwkBuilderSupplier;
    constructor(arg0: { [key: string]: any }, arg1: KeyOperationPolicy)
    // private operationPolicy: KeyOperationPolicy;
    // private provider: { [key: string]: any };
    get(): DynamicJwkBuilder<Object, Object>;
}