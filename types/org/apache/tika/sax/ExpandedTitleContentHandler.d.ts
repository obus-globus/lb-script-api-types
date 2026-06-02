import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class ExpandedTitleContentHandler extends ContentHandlerDecorator {
    constructor()
    constructor(arg0: ContentHandler)
    // private isTitleTagOpen: boolean;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    startDocument(): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}