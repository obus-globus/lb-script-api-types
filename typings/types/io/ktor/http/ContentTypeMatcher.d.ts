import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ContentTypeMatcher extends Object{
    contains(contentType: ContentType): boolean;
}