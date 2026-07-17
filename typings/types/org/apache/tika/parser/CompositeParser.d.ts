import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { MediaTypeRegistry } from '../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class CompositeParser extends Object implements Parser {
    constructor()
    constructor(arg0: MediaTypeRegistry, ...arg1: Parser[])
    constructor(arg0: MediaTypeRegistry, arg1: Parser[])
    constructor(arg0: MediaTypeRegistry, arg1: Parser[], arg2: Class<Parser>[])
    readonly fallback: Parser;
    readonly parsers: Parser[];
    // private registry: MediaTypeRegistry;
    // private assignableFrom(arg0: Class<Parser>[], arg1: Class<Parser>): boolean;
    findDuplicateParsers(arg0: ParseContext): JavaMap<MediaType, Parser[]>;
    getAllComponentParsers(): Parser[];
    getFallback(): Parser;
    getMediaTypeRegistry(): MediaTypeRegistry;
    getParser(arg0: Metadata): Parser;
    getParser(arg0: Metadata, arg1: ParseContext): Parser;
    getParsers(): JavaMap<MediaType, Parser>;
    getParsers(arg0: ParseContext): JavaMap<MediaType, Parser>;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    // private isExcluded(arg0: Class<Parser>[], arg1: Class<Parser>): boolean;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    // private recordEmbeddedMetadata(arg0: Metadata, arg1: ParseContext): void;
    setFallback(arg0: Parser): void;
    setMediaTypeRegistry(arg0: MediaTypeRegistry): void;
    setParsers(arg0: JavaMap<MediaType, Parser>): void;
}