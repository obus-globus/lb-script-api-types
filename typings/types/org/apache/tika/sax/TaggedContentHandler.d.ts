import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { SAXException } from '../../../../org/xml/sax/SAXException.d.ts'
export class TaggedContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler)
    handleException(arg0: SAXException): void;
    isCauseOf(arg0: SAXException): boolean;
    throwIfCauseOf(arg0: Exception): void;
}