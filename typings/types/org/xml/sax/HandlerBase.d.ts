import type { Object } from '../../../java/lang/Object.d.ts'
import type { AttributeList } from '../../../org/xml/sax/AttributeList.d.ts'
import type { DTDHandler } from '../../../org/xml/sax/DTDHandler.d.ts'
import type { DocumentHandler } from '../../../org/xml/sax/DocumentHandler.d.ts'
import type { EntityResolver } from '../../../org/xml/sax/EntityResolver.d.ts'
import type { ErrorHandler } from '../../../org/xml/sax/ErrorHandler.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
import type { Locator } from '../../../org/xml/sax/Locator.d.ts'
import type { SAXParseException } from '../../../org/xml/sax/SAXParseException.d.ts'
export class HandlerBase extends Object implements DTDHandler, DocumentHandler, EntityResolver, ErrorHandler {
    constructor()
    characters(arg0: string[], arg1: number, arg2: number): void;
    endDocument(): void;
    endElement(arg0: string): void;
    error(arg0: SAXParseException): void;
    fatalError(arg0: SAXParseException): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    notationDecl(arg0: string, arg1: string, arg2: string): void;
    processingInstruction(arg0: string, arg1: string): void;
    resolveEntity(arg0: string, arg1: string): InputSource;
    setDocumentLocator(arg0: Locator): void;
    startDocument(): void;
    startElement(arg0: string, arg1: AttributeList): void;
    unparsedEntityDecl(arg0: string, arg1: string, arg2: string, arg3: string): void;
    warning(arg0: SAXParseException): void;
}