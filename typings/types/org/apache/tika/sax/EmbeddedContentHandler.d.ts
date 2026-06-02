import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class EmbeddedContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler)
    endDocument(): void;
    startDocument(): void;
}