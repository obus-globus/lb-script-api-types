import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class NetworkParser extends Object implements Parser {
    constructor(arg0: URI)
    constructor(arg0: URI, arg1: MediaType[])
    // private supportedTypes: MediaType[];
    // private uri: URI;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    // private parse(arg0: TikaInputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
}