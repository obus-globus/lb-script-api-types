import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { RecursiveParserWrapper$SecureHandlerCounter } from '../../../../org/apache/tika/parser/RecursiveParserWrapper$SecureHandlerCounter.d.ts'
import type { SecureContentHandler } from '../../../../org/apache/tika/sax/SecureContentHandler.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class RecursiveParserWrapper$RecursivelySecureContentHandler extends SecureContentHandler {
    constructor(arg0: ContentHandler, arg1: TikaInputStream, arg2: RecursiveParserWrapper$SecureHandlerCounter, arg3: boolean, arg4: ParseContext)
    // private handler: ContentHandler;
    // private handlerCounter: RecursiveParserWrapper$SecureHandlerCounter;
    // private id: number;
    // private parseContext: ParseContext;
    // private throwOnWriteLimitReached: boolean;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    // private handleWriteLimitReached(): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}