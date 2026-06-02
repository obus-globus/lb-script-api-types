import type { Object } from '../../../java/lang/Object.d.ts'
import type { AttributeList } from '../../../org/xml/sax/AttributeList.d.ts'
import type { Locator } from '../../../org/xml/sax/Locator.d.ts'
export interface DocumentHandler extends Object{
    characters(arg0: string[], arg1: number, arg2: number): void;
    endDocument(): void;
    endElement(arg0: string): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    processingInstruction(arg0: string, arg1: string): void;
    setDocumentLocator(arg0: Locator): void;
    startDocument(): void;
    startElement(arg0: string, arg1: AttributeList): void;
}