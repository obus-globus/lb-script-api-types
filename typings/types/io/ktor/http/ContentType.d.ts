import type { ContentType$Companion } from '../../../io/ktor/http/ContentType$Companion.d.ts'
import type { HeaderValueParam } from '../../../io/ktor/http/HeaderValueParam.d.ts'
import type { HeaderValueWithParameters } from '../../../io/ktor/http/HeaderValueWithParameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentType extends HeaderValueWithParameters {
    static Companion: ContentType$Companion;
    constructor(contentType: string, contentSubtype: string, parameters: HeaderValueParam[])
    readonly contentSubtype: string;
    readonly contentType: string;
    equals(other: Object | null): boolean;
    // private hasParameter(name: string, value: string): boolean;
    hashCode(): number;
    match(pattern: ContentType): boolean;
    match(pattern: string): boolean;
    withParameter(name: string, value: string): ContentType;
    withoutParameters(): ContentType;
}