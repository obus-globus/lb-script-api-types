import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentType$Message extends Object {
    static INSTANCE: ContentType$Message;
    static TYPE: string;
    // private Any: ContentType;
    /*not mapped: */ getAny(): ContentType;
    // private Http: ContentType;
    /*not mapped: */ getHttp(): ContentType;
    TYPE: string;
    contains(contentType: ContentType): boolean;
    contains(contentSubtype: string): boolean;
}