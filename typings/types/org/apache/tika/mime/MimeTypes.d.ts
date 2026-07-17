import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Magic } from '../../../../org/apache/tika/mime/Magic.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { MediaTypeRegistry } from '../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { MimeType } from '../../../../org/apache/tika/mime/MimeType.d.ts'
import type { Patterns } from '../../../../org/apache/tika/mime/Patterns.d.ts'
export class MimeTypes extends Object implements Serializable, Detector {
    static OCTET_STREAM: string;
    static PLAIN_TEXT: string;
    static XML: string;
    static getDefaultMimeTypes(): MimeTypes;
    static getDefaultMimeTypes(paramarg0: ClassLoader): MimeTypes;
    constructor()
    // private htmlMimeType: MimeType;
    // private magics: Magic[];
    // private patterns: Patterns;
    // private registry: MediaTypeRegistry;
    // private rootMimeType: MimeType;
    // private rootMimeTypeL: MimeType[];
    // private textMimeType: MimeType;
    // private types: JavaMap<MediaType, MimeType>;
    // private xmlMimeType: MimeType;
    // private xmls: MimeType[];
    add(arg0: MimeType): void;
    addAlias(arg0: MimeType, arg1: MediaType): void;
    addPattern(arg0: MimeType, arg1: string): void;
    addPattern(arg0: MimeType, arg1: string, arg2: boolean): void;
    // private applyHint(arg0: MimeType[], arg1: MimeType): MimeType[];
    detect(arg0: InputStream, arg1: Metadata): MediaType;
    forName(arg0: string): MimeType;
    getMediaTypeRegistry(): MediaTypeRegistry;
    getMimeType(arg0: File): MimeType;
    getMimeType(arg0: number[]): MimeType[];
    getMimeType(arg0: string): MimeType;
    getMinLength(): number;
    getRegisteredMimeType(arg0: string): MimeType;
    init(): void;
    readMagicHeader(arg0: InputStream): number[];
    setSuperType(arg0: MimeType, arg1: MediaType): void;
}