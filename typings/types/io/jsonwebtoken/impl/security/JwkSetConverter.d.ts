import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { DynamicJwkBuilder } from '../../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JwkSetConverter extends Object implements Converter<JavaMap<any, any>[], Object> {
    constructor()
    constructor(arg0: Converter<JavaMap<any, any>, Object>, arg1: boolean)
    constructor(arg0: Supplier<DynamicJwkBuilder<any, any>>, arg1: boolean)
    constructor(arg0: boolean)
    // private JWK_CONVERTER: Converter<JavaMap<any, any>, Object>;
    // private PARAM: Parameter<JavaMap<any, any>[]>;
    readonly ignoreUnsupported: boolean;
    applyFrom(arg0: Object): JavaMap<any, any>[];
    applyTo(arg0: JavaMap<any, any>[]): Object;
    isIgnoreUnsupported(): boolean;
}