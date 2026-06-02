import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { HeaderStore } from '../../../../net/lenni0451/commons/httpclient/HeaderStore.d.ts'
import type { HttpResponse$DecoderProvider } from '../../../../net/lenni0451/commons/httpclient/HttpResponse$DecoderProvider.d.ts'
import type { HttpContent } from '../../../../net/lenni0451/commons/httpclient/content/HttpContent.d.ts'
import type { ContentType } from '../../../../net/lenni0451/commons/httpclient/model/ContentType.d.ts'
export class HttpResponse extends HeaderStore<HttpResponse> {
    constructor(arg0: URL, arg1: number, arg2: InputStream, arg3: { [key: string]: string[] })
    constructor(arg0: URL, arg1: number, arg2: number[], arg3: { [key: string]: string[] })
    constructor(arg0: URL, arg1: number, arg2: HttpContent, arg3: { [key: string]: string[] })
    readonly content: HttpContent;
    readonly statusCode: number;
    // private url: URL;
    getContent(): HttpContent;
    getContentAsString(): string;
    getContentAsString(arg0: Charset): string;
    getContentType(): Optional<ContentType>;
    getDecodedContent(): HttpContent;
    getDecodedContent(arg0: (param0: string) => net.lenni0451.commons.httpclient.HttpResponse.InputStreamMapper): HttpContent;
    getInputStream(): InputStream;
    getStatusCode(): number;
    getStatusMessage(): string;
    getURL(): URL;
}