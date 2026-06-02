import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { DynamicJwkBuilder } from '../../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IllegalArgumentException } from '../../../../java/lang/IllegalArgumentException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JwkConverter<T extends Jwk<Object>> extends Object implements Converter<T, Object> {
    static ANY: JwkConverter<Object>;
    static JWK_CLASS: Class<Object>;
    static PUBLIC_JWK: JwkConverter<Object>;
    static PUBLIC_JWK_CLASS: Class<Object>;
    constructor(arg0: Supplier<DynamicJwkBuilder<Object, Object>>)
    constructor(arg0: Class<T>)
    constructor(arg0: Class<T>, arg1: Supplier<DynamicJwkBuilder<Object, Object>>)
    // private desiredType: Class<T>;
    // private supplier: Supplier<DynamicJwkBuilder<Object, Object>>;
    applyFrom(arg0: Object): T;
    applyTo(arg0: T): Object;
    // private unexpectedIAE(arg0: Jwk<Object>): IllegalArgumentException;
}