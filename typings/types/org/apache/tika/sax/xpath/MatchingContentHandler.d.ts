import type { ContentHandlerDecorator } from '../../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
import type { Attributes } from '../../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../../org/xml/sax/ContentHandler.d.ts'
export class MatchingContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler, arg1: Matcher)
    // private matcher: Matcher;
    // private matchers: Matcher[];
    characters(arg0: string[], arg1: number, arg2: number): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    processingInstruction(arg0: string, arg1: string): void;
    skippedEntity(arg0: string): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}