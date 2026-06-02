import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class WriteOutContentHandler extends ContentHandlerDecorator {
    constructor()
    constructor(arg0: Writer)
    constructor(arg0: Writer, arg1: number)
    constructor(arg0: number)
    constructor(arg0: ContentHandler, arg1: number)
    constructor(arg0: ContentHandler, arg1: number, arg2: boolean, arg3: ParseContext)
    // private parseContext: ParseContext;
    // private throwOnWriteLimitReached: boolean;
    // private writeCount: number;
    // private writeLimit: number;
    // private writeLimitReached: boolean;
    characters(arg0: string[], arg1: number, arg2: number): void;
    // private handleWriteLimitReached(): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
}