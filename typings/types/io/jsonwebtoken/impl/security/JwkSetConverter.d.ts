import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { DynamicJwkBuilder } from '../../../../io/jsonwebtoken/security/DynamicJwkBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JwkSetConverter extends Object implements Converter<{ [key: string]: any }[], Object> {
    constructor()
    constructor(arg0: Converter<{ [key: string]: any }, Object>, arg1: boolean)
    constructor(arg0: Supplier<DynamicJwkBuilder<any, any>>, arg1: boolean)
    constructor(arg0: boolean)
    // private JWK_CONVERTER: Converter<{ [key: string]: any }, Object>;
    // private PARAM: Parameter<{ [key: string]: any }[]>;
    readonly ignoreUnsupported: boolean;
    applyFrom(arg0: Object): { [key: string]: any }[];
    applyTo(arg0: { [key: string]: any }[]): Object;
    isIgnoreUnsupported(): boolean;
}