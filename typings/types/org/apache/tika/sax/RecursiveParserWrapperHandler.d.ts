import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Property } from '../../../../org/apache/tika/metadata/Property.d.ts'
import type { MetadataFilter } from '../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { AbstractRecursiveParserWrapperHandler } from '../../../../org/apache/tika/sax/AbstractRecursiveParserWrapperHandler.d.ts'
import type { ContentHandlerFactory } from '../../../../org/apache/tika/sax/ContentHandlerFactory.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class RecursiveParserWrapperHandler extends AbstractRecursiveParserWrapperHandler {
    static EMBEDDED_RESOURCE_LIMIT_REACHED: Property;
    constructor(arg0: ContentHandlerFactory)
    constructor(arg0: ContentHandlerFactory, arg1: number)
    constructor(arg0: ContentHandlerFactory, arg1: number, arg2: MetadataFilter)
    // private metadataFilter: MetadataFilter;
    readonly metadataList: Metadata[];
    addContent(arg0: ContentHandler, arg1: Metadata): void;
    endDocument(): void;
    endDocument(arg0: ContentHandler, arg1: Metadata): void;
    endEmbeddedDocument(arg0: ContentHandler, arg1: Metadata): void;
    getMetadataList(): Metadata[];
    startEmbeddedDocument(arg0: ContentHandler, arg1: Metadata): void;
    // private writeFinalEmbeddedPaths(): void;
}