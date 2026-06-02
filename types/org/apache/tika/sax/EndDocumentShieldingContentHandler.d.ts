import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class EndDocumentShieldingContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler)
    // private endDocumentCalled: boolean;
    endDocument(): void;
    isEndDocumentWasCalled(): boolean;
    reallyEndDocument(): void;
}