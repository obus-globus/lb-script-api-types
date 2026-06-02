import type { Object } from '../../../java/lang/Object.d.ts'
import type { Attributes } from '../../../org/xml/sax/Attributes.d.ts'
import type { Locator } from '../../../org/xml/sax/Locator.d.ts'
export interface ContentHandler extends Object{
    characters(arg0: string[], arg1: number, arg2: number): void;
    declaration(arg0: string, arg1: string, arg2: string): void;
    endDocument(): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    endPrefixMapping(arg0: string): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    processingInstruction(arg0: string, arg1: string): void;
    setDocumentLocator(arg0: Locator): void;
    skippedEntity(arg0: string): void;
    startDocument(): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    startPrefixMapping(arg0: string, arg1: string): void;
}