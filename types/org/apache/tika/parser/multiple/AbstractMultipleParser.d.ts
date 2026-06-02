import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../../org/apache/tika/config/Param.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../../org/apache/tika/mime/MediaType.d.ts'
import type { MediaTypeRegistry } from '../../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../../org/apache/tika/parser/Parser.d.ts'
import type { AbstractMultipleParser$MetadataPolicy } from '../../../../../org/apache/tika/parser/multiple/AbstractMultipleParser$MetadataPolicy.d.ts'
import type { ContentHandlerFactory } from '../../../../../org/apache/tika/sax/ContentHandlerFactory.d.ts'
import type { ContentHandler } from '../../../../../org/xml/sax/ContentHandler.d.ts'
export abstract class AbstractMultipleParser extends Object implements Parser {
    constructor(arg0: MediaTypeRegistry, arg1: E[], arg2: { [key: string]: Param<Object> })
    constructor(arg0: MediaTypeRegistry, arg1: AbstractMultipleParser$MetadataPolicy, arg2: E[])
    constructor(arg0: MediaTypeRegistry, arg1: AbstractMultipleParser$MetadataPolicy, arg2: Parser[])
    // private offeredTypes: MediaType[];
    // private parsers: E[];
    // private policy: AbstractMultipleParser$MetadataPolicy;
    // private registry: MediaTypeRegistry;
    getAllParsers(): Parser[];
    getMediaTypeRegistry(): MediaTypeRegistry;
    getMetadataPolicy(): AbstractMultipleParser$MetadataPolicy;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    parse(arg0: InputStream, arg1: ContentHandlerFactory, arg2: Metadata, arg3: ParseContext): void;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    // private parse(arg0: InputStream, arg1: ContentHandler, arg2: ContentHandlerFactory, arg3: Metadata, arg4: ParseContext): void;
    parserCompleted(arg0: Parser, arg1: Metadata, arg2: ContentHandler, arg3: ParseContext, arg4: Exception): boolean;
    parserPrepare(arg0: Parser, arg1: Metadata, arg2: ParseContext): void;
    setMediaTypeRegistry(arg0: MediaTypeRegistry): void;
}