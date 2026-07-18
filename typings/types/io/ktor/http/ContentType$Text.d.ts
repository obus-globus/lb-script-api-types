import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ContentType$Text extends Object {
    static INSTANCE: ContentType$Text;
    static TYPE: string;
    // private Any: ContentType;
    /*not mapped: */ getAny(): ContentType;
    readonly CSS: ContentType;
    readonly CSV: ContentType;
    // private EventStream: ContentType;
    /*not mapped: */ getEventStream(): ContentType;
    // private Html: ContentType;
    /*not mapped: */ getHtml(): ContentType;
    // private JavaScript: ContentType;
    /*not mapped: */ getJavaScript(): ContentType;
    // private Plain: ContentType;
    /*not mapped: */ getPlain(): ContentType;
    TYPE: string;
    readonly VCard: ContentType;
    // private Xml: ContentType;
    /*not mapped: */ getXml(): ContentType;
    contains(contentType: ContentType): boolean;
    contains(contentType: CharSequence): boolean;
}