import type { Result } from '../../../../javax/xml/transform/Result.d.ts'
import type { Transformer } from '../../../../javax/xml/transform/Transformer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { DTDHandler } from '../../../../org/xml/sax/DTDHandler.d.ts'
import type { Locator } from '../../../../org/xml/sax/Locator.d.ts'
import type { LexicalHandler } from '../../../../org/xml/sax/ext/LexicalHandler.d.ts'
export interface TransformerHandler extends Object, ContentHandler, DTDHandler, LexicalHandler{
    declaration(arg0: string, arg1: string, arg2: string): void;
    endCDATA(): void;
    endDTD(): void;
    endDocument(): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    endEntity(arg0: string): void;
    endPrefixMapping(arg0: string): void;
    getSystemId(): string;
    getTransformer(): Transformer;
    notationDecl(arg0: string, arg1: string, arg2: string): void;
    processingInstruction(arg0: string, arg1: string): void;
    setDocumentLocator(arg0: Locator): void;
    setResult(arg0: Result): void;
    setSystemId(arg0: string): void;
    skippedEntity(arg0: string): void;
    startCDATA(): void;
    startDTD(arg0: string, arg1: string, arg2: string): void;
    startDocument(): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    startEntity(arg0: string): void;
    startPrefixMapping(arg0: string, arg1: string): void;
    unparsedEntityDecl(arg0: string, arg1: string, arg2: string, arg3: string): void;
}