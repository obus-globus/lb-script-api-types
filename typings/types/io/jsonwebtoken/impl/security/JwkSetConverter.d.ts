import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { DynamicJwkBuilder } from '../../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JwkSetConverter extends Object implements Converter<Jwk<Object>[], Object> {
    constructor()
    constructor(arg0: Converter<Jwk<Object>, Object>, arg1: boolean)
    constructor(arg0: Supplier<DynamicJwkBuilder<Object, Object>>, arg1: boolean)
    constructor(arg0: boolean)
    // private JWK_CONVERTER: Converter<Jwk<Object>, Object>;
    // private PARAM: Parameter<Jwk<Object>[]>;
    readonly ignoreUnsupported: boolean;
    applyFrom(arg0: Object): Jwk<Object>[];
    applyTo(arg0: Jwk<Object>[]): Object;
    isIgnoreUnsupported(): boolean;
}