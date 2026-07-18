import type { HeaderValueParam } from '../../../../io/ktor/http/HeaderValueParam.d.ts'
import type { HeaderValueWithParameters } from '../../../../io/ktor/http/HeaderValueWithParameters.d.ts'
import type { AcceptEncoding$Companion } from '../../../../io/ktor/http/header/AcceptEncoding$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AcceptEncoding extends HeaderValueWithParameters {
    static Companion: AcceptEncoding$Companion;
    constructor(acceptEncoding: string, qValue: number)
    constructor(acceptEncoding: string, parameters: HeaderValueParam[])
    readonly acceptEncoding: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    match(pattern: AcceptEncoding): boolean;
    withQValue(qValue: number): AcceptEncoding;
}