import type { HeaderValue } from '../../../io/ktor/http/HeaderValue.d.ts'
import type { HeaderValueParam } from '../../../io/ktor/http/HeaderValueParam.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
export class HttpHeaderValueParserKt extends Object {
    static parseAndSortContentTypeHeader(header: string | null): HeaderValue[];
    static parseAndSortHeader(header: string | null): HeaderValue[];
    static parseHeaderValue(text: string | null): HeaderValue[];
    static parseHeaderValue(text: string | null, parametersOnly: boolean): HeaderValue[];
    static toHeaderParamsList(self: Pair<string, string>[]): HeaderValueParam[];
}