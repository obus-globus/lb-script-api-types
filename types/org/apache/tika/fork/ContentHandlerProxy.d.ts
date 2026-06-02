import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ForkProxy } from '../../../../org/apache/tika/fork/ForkProxy.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { Locator } from '../../../../org/xml/sax/Locator.d.ts'
export class ContentHandlerProxy extends Object implements ForkProxy, ContentHandler {
    static CHARACTERS: number;
    static END_DOCUMENT: number;
    static END_ELEMENT: number;
    static END_PREFIX_MAPPING: number;
    static IGNORABLE_WHITESPACE: number;
    static PROCESSING_INSTRUCTION: number;
    static SKIPPED_ENTITY: number;
    static START_DOCUMENT: number;
    static START_ELEMENT: number;
    static START_PREFIX_MAPPING: number;
    constructor(arg0: number)
    // private output: DataOutputStream;
    // private resource: number;
    characters(arg0: string[], arg1: number, arg2: number): void;
    declaration(arg0: string, arg1: string, arg2: string): void;
    // private doneSending(): void;
    endDocument(): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    endPrefixMapping(arg0: string): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    init(arg0: DataInputStream, arg1: DataOutputStream): void;
    processingInstruction(arg0: string, arg1: string): void;
    // private sendCharacters(arg0: string[], arg1: number, arg2: number): void;
    // private sendRequest(arg0: number): void;
    // private sendString(arg0: string): void;
    setDocumentLocator(arg0: Locator): void;
    skippedEntity(arg0: string): void;
    startDocument(): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    startPrefixMapping(arg0: string, arg1: string): void;
    // private writeString(arg0: string): void;
}