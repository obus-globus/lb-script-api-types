import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { SafeContentHandler$Output } from '../../../../org/apache/tika/sax/SafeContentHandler$Output.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class SafeContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler)
    // private charactersOutput: SafeContentHandler$Output;
    // private ignorableWhitespaceOutput: SafeContentHandler$Output;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endDocument(): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    // private filter(arg0: string[], arg1: number, arg2: number, arg3: SafeContentHandler$Output): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    isInvalid(arg0: number): boolean;
    // private isInvalid(arg0: string): boolean;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    writeReplacement(arg0: SafeContentHandler$Output): void;
}