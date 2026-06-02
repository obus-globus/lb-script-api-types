import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../../org/apache/tika/config/Param.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaTypeRegistry } from '../../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../../org/apache/tika/parser/Parser.d.ts'
import type { AbstractMultipleParser } from '../../../../../org/apache/tika/parser/multiple/AbstractMultipleParser.d.ts'
import type { AbstractMultipleParser$MetadataPolicy } from '../../../../../org/apache/tika/parser/multiple/AbstractMultipleParser$MetadataPolicy.d.ts'
import type { ContentHandler } from '../../../../../org/xml/sax/ContentHandler.d.ts'
export class FallbackParser extends AbstractMultipleParser {
    static allowedPolicies: AbstractMultipleParser$MetadataPolicy[];
    constructor(arg0: MediaTypeRegistry, arg1: E[], arg2: { [key: string]: Param<Object> })
    constructor(arg0: MediaTypeRegistry, arg1: AbstractMultipleParser$MetadataPolicy, arg2: E[])
    constructor(arg0: MediaTypeRegistry, arg1: AbstractMultipleParser$MetadataPolicy, arg2: Parser[])
    parserCompleted(arg0: Parser, arg1: Metadata, arg2: ContentHandler, arg3: ParseContext, arg4: Exception): boolean;
}