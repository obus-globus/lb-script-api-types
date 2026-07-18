import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { HeaderValueWithParameters } from '../../../io/ktor/http/HeaderValueWithParameters.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentTypesKt extends Object {
    static charset(self: HeaderValueWithParameters): Charset | null;
    static isTextType(self: ContentType): boolean;
    static withCharset(self: ContentType, charset: Charset): ContentType;
    static withCharsetIfNeeded(self: ContentType, charset: Charset): ContentType;
}