import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ContentType$Font extends Object {
    static INSTANCE: ContentType$Font;
    static TYPE: string;
    // private Any: ContentType;
    /*not mapped: */ getAny(): ContentType;
    // private Collection: ContentType;
    /*not mapped: */ getCollection(): ContentType;
    // private Otf: ContentType;
    /*not mapped: */ getOtf(): ContentType;
    // private Sfnt: ContentType;
    /*not mapped: */ getSfnt(): ContentType;
    TYPE: string;
    // private Ttf: ContentType;
    /*not mapped: */ getTtf(): ContentType;
    // private Woff: ContentType;
    /*not mapped: */ getWoff(): ContentType;
    // private Woff2: ContentType;
    /*not mapped: */ getWoff2(): ContentType;
    contains(contentType: ContentType): boolean;
    contains(contentType: CharSequence): boolean;
}