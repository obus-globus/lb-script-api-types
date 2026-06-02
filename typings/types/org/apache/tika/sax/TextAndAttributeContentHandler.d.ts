import type { TextContentHandler } from '../../../../org/apache/tika/sax/TextContentHandler.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class TextAndAttributeContentHandler extends TextContentHandler {
    constructor(arg0: ContentHandler)
    constructor(arg0: ContentHandler, arg1: boolean)
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}