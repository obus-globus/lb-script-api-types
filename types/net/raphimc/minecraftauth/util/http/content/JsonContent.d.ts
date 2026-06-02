import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpContent } from '../../../../../../net/lenni0451/commons/httpclient/content/HttpContent.d.ts'
import type { InputStreamContent } from '../../../../../../net/lenni0451/commons/httpclient/content/impl/InputStreamContent.d.ts'
import type { MultiPartFormContent } from '../../../../../../net/lenni0451/commons/httpclient/content/impl/MultiPartFormContent.d.ts'
import type { StringContent } from '../../../../../../net/lenni0451/commons/httpclient/content/impl/StringContent.d.ts'
import type { ContentType } from '../../../../../../net/lenni0451/commons/httpclient/model/ContentType.d.ts'
export class JsonContent extends StringContent {
    static bytes(paramarg0: number[]): HttpContent;
    static bytes(paramarg0: number[], paramarg1: number, paramarg2: number): HttpContent;
    static file(paramarg0: File): HttpContent;
    static form(paramarg0: string, paramarg1: string): HttpContent;
    static form(paramarg0: { [key: string]: string }): HttpContent;
    static inputStream(paramarg0: ContentType, paramarg1: InputStream, paramarg2: number): InputStreamContent;
    static multiPartForm(): MultiPartFormContent;
    static string(paramarg0: string): HttpContent;
    static string(paramarg0: string, paramarg1: Charset): HttpContent;
    constructor(arg0: JsonObject)
    constructor(arg0: Map$Entry<string, GsonElement>[])
}