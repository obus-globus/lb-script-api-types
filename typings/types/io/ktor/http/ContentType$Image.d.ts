import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentType$Image extends Object {
    static INSTANCE: ContentType$Image;
    static TYPE: string;
    readonly APNG: ContentType;
    readonly AVIF: ContentType;
    // private Any: ContentType;
    /*not mapped: */ getAny(): ContentType;
    readonly BMP: ContentType;
    readonly GIF: ContentType;
    readonly HEIC: ContentType;
    readonly HEIF: ContentType;
    readonly JPEG: ContentType;
    readonly JXL: ContentType;
    readonly PNG: ContentType;
    readonly SVG: ContentType;
    readonly TIFF: ContentType;
    TYPE: string;
    readonly WEBP: ContentType;
    readonly XIcon: ContentType;
    contains(contentType: ContentType): boolean;
    contains(contentSubtype: string): boolean;
}