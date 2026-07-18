import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { HeaderValueParam } from '../../../io/ktor/http/HeaderValueParam.d.ts'
import type { HeaderValueWithParameters } from '../../../io/ktor/http/HeaderValueWithParameters.d.ts'
import type { HeaderValueWithParameters$Companion } from '../../../io/ktor/http/HeaderValueWithParameters$Companion.d.ts'
export class LinkHeader extends HeaderValueWithParameters {
    static Companion: HeaderValueWithParameters$Companion;
    constructor(uri: string, ...rel: string[])
    constructor(uri: string, rel: string)
    constructor(uri: string, params: HeaderValueParam[])
    constructor(uri: string, rel: string[], type: ContentType)
    readonly uri: string;
}