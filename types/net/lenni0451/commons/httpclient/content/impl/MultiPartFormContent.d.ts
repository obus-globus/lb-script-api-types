import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { HttpContent } from '../../../../../../net/lenni0451/commons/httpclient/content/HttpContent.d.ts'
import type { InputStreamContent } from '../../../../../../net/lenni0451/commons/httpclient/content/impl/InputStreamContent.d.ts'
import type { MultiPartFormContent$FormPart } from '../../../../../../net/lenni0451/commons/httpclient/content/impl/MultiPartFormContent$FormPart.d.ts'
import type { ContentType } from '../../../../../../net/lenni0451/commons/httpclient/model/ContentType.d.ts'
export class MultiPartFormContent extends HttpContent {
    static bytes(paramarg0: number[]): HttpContent;
    static bytes(paramarg0: number[], paramarg1: number, paramarg2: number): HttpContent;
    static file(paramarg0: File): HttpContent;
    static form(paramarg0: string, paramarg1: string): HttpContent;
    static form(paramarg0: { [key: string]: string }): HttpContent;
    static inputStream(paramarg0: ContentType, paramarg1: InputStream, paramarg2: number): InputStreamContent;
    static multiPartForm(): MultiPartFormContent;
    static string(paramarg0: string): HttpContent;
    static string(paramarg0: string, paramarg1: Charset): HttpContent;
    constructor()
    constructor(arg0: string)
    // private boundary: string;
    // private parts: MultiPartFormContent$FormPart[];
    // private unknownLength: boolean;
    addPart(arg0: string, arg1: HttpContent): MultiPartFormContent;
    addPart(arg0: string, arg1: HttpContent, arg2: string): MultiPartFormContent;
    addPart(arg0: MultiPartFormContent$FormPart): MultiPartFormContent;
    canBeStreamedMultipleTimes(): boolean;
    compute(): InputStream;
    getLength(): number;
}