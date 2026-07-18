import type { ContentDisposition } from '../../../io/ktor/http/ContentDisposition.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentDisposition$Companion extends Object {
    // private Attachment: ContentDisposition;
    /*not mapped: */ getAttachment(): ContentDisposition;
    // private File: ContentDisposition;
    /*not mapped: */ getFile(): ContentDisposition;
    // private Inline: ContentDisposition;
    /*not mapped: */ getInline(): ContentDisposition;
    // private Mixed: ContentDisposition;
    /*not mapped: */ getMixed(): ContentDisposition;
    parse(value: string): ContentDisposition;
}