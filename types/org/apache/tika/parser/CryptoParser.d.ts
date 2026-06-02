import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { DelegatingParser } from '../../../../org/apache/tika/parser/DelegatingParser.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export abstract class CryptoParser extends DelegatingParser {
    constructor(arg0: string, arg1: Provider, arg2: MediaType[])
    constructor(arg0: string, arg1: MediaType[])
    // private provider: Provider;
    // private transformation: string;
    // private types: MediaType[];
    getSupportedTypes(arg0: ParseContext): MediaType[];
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
}