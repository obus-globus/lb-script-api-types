import type { ContentDisposition$Companion } from '../../../io/ktor/http/ContentDisposition$Companion.d.ts'
import type { HeaderValueParam } from '../../../io/ktor/http/HeaderValueParam.d.ts'
import type { HeaderValueWithParameters } from '../../../io/ktor/http/HeaderValueWithParameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentDisposition extends HeaderValueWithParameters {
    static Companion: ContentDisposition$Companion;
    constructor(disposition: string, parameters: HeaderValueParam[])
    readonly disposition: string;
    readonly name: string | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    withParameter(key: string, value: string, encodeValue: boolean): ContentDisposition;
    withParameters(newParameters: HeaderValueParam[]): ContentDisposition;
}