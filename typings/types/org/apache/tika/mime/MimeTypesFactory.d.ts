import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
export class MimeTypesFactory extends Object {
    static CUSTOM_MIMES_SYS_PROP: string;
    static create(): MimeTypes;
    static create(paramarg0: InputStream): MimeTypes;
    static create(...paramarg0: InputStream[]): MimeTypes;
    static create(paramarg0: string): MimeTypes;
    static create(paramarg0: string, paramarg1: string): MimeTypes;
    static create(paramarg0: string, paramarg1: string, paramarg2: ClassLoader): MimeTypes;
    static create(paramarg0: URL): MimeTypes;
    static create(...paramarg0: URL[]): MimeTypes;
    static create(paramarg0: Document): MimeTypes;
    constructor()
}