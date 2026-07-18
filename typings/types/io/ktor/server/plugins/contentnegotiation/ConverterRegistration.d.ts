import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { ContentConverter } from '../../../../../io/ktor/serialization/ContentConverter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConverterRegistration extends Object {
    constructor(contentType: ContentType, converter: ContentConverter)
    readonly contentType: ContentType;
    readonly converter: ContentConverter;
}