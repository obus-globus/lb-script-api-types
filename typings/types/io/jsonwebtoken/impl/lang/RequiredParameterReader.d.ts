import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JwtException } from '../../../../io/jsonwebtoken/JwtException.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { ParameterReadable } from '../../../../io/jsonwebtoken/impl/lang/ParameterReadable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequiredParameterReader extends Object implements ParameterReadable {
    constructor(arg0: JavaMap<any, any>)
    constructor(arg0: ParameterReadable)
    // private src: ParameterReadable;
    get<T extends unknown>(arg0: Parameter<T>): T;
    // private malformed(arg0: string): JwtException;
    // private name(): string;
}