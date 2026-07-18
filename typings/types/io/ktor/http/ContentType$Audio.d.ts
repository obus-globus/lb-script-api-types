import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ContentType$Audio extends Object {
    static INSTANCE: ContentType$Audio;
    static TYPE: string;
    // private Any: ContentType;
    /*not mapped: */ getAny(): ContentType;
    readonly MP4: ContentType;
    readonly MPEG: ContentType;
    readonly OGG: ContentType;
    TYPE: string;
    contains(contentType: ContentType): boolean;
    contains(contentType: CharSequence): boolean;
}