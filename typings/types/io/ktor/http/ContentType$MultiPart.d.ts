import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ContentType$MultiPart extends Object {
    static INSTANCE: ContentType$MultiPart;
    static TYPE: string;
    // private Alternative: ContentType;
    /*not mapped: */ getAlternative(): ContentType;
    // private Any: ContentType;
    /*not mapped: */ getAny(): ContentType;
    // private ByteRanges: ContentType;
    /*not mapped: */ getByteRanges(): ContentType;
    // private Encrypted: ContentType;
    /*not mapped: */ getEncrypted(): ContentType;
    // private FormData: ContentType;
    /*not mapped: */ getFormData(): ContentType;
    // private Mixed: ContentType;
    /*not mapped: */ getMixed(): ContentType;
    // private Related: ContentType;
    /*not mapped: */ getRelated(): ContentType;
    // private Signed: ContentType;
    /*not mapped: */ getSigned(): ContentType;
    TYPE: string;
    contains(contentType: ContentType): boolean;
    contains(contentType: CharSequence): boolean;
}