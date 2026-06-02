import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Property } from '../../../../org/apache/tika/metadata/Property.d.ts'
import type { ContentHandlerFactory } from '../../../../org/apache/tika/sax/ContentHandlerFactory.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { DefaultHandler } from '../../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export abstract class AbstractRecursiveParserWrapperHandler extends DefaultHandler implements Serializable {
    static EMBEDDED_RESOURCE_LIMIT_REACHED: Property;
    constructor(arg0: ContentHandlerFactory)
    constructor(arg0: ContentHandlerFactory, arg1: number)
    readonly contentHandlerFactory: ContentHandlerFactory;
    // private embeddedDepth: number;
    // private embeddedResources: number;
    // private maxEmbeddedResources: number;
    decrementEmbeddedDepth(): void;
    endDocument(arg0: ContentHandler, arg1: Metadata): void;
    endEmbeddedDocument(arg0: ContentHandler, arg1: Metadata): void;
    getContentHandlerFactory(): ContentHandlerFactory;
    getNewContentHandler(): ContentHandler;
    getNewContentHandler(arg0: OutputStream, arg1: Charset): ContentHandler;
    hasHitMaximumEmbeddedResources(): boolean;
    startEmbeddedDocument(arg0: ContentHandler, arg1: Metadata): void;
}