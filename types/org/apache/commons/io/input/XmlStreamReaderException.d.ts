import type { IOException } from '../../../../../java/io/IOException.d.ts'
export class XmlStreamReaderException extends IOException {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string)
    readonly bomEncoding: string;
    readonly contentTypeEncoding: string;
    readonly contentTypeMime: string;
    readonly xmlEncoding: string;
    readonly xmlGuessEncoding: string;
    getBomEncoding(): string;
    getContentTypeEncoding(): string;
    getContentTypeMime(): string;
    getXmlEncoding(): string;
    getXmlGuessEncoding(): string;
}