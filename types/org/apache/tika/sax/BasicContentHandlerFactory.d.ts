import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { BasicContentHandlerFactory$HANDLER_TYPE } from '../../../../org/apache/tika/sax/BasicContentHandlerFactory$HANDLER_TYPE.d.ts'
import type { ContentHandlerFactory } from '../../../../org/apache/tika/sax/ContentHandlerFactory.d.ts'
import type { WriteLimiter } from '../../../../org/apache/tika/sax/WriteLimiter.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class BasicContentHandlerFactory extends Object implements ContentHandlerFactory, WriteLimiter {
    static parseHandlerType(paramarg0: string, paramarg1: BasicContentHandlerFactory$HANDLER_TYPE): BasicContentHandlerFactory$HANDLER_TYPE;
    constructor(arg0: BasicContentHandlerFactory$HANDLER_TYPE, arg1: number)
    constructor(arg0: BasicContentHandlerFactory$HANDLER_TYPE, arg1: number, arg2: boolean, arg3: ParseContext)
    // private parseContext: ParseContext;
    readonly throwOnWriteLimitReached: boolean;
    readonly type: BasicContentHandlerFactory$HANDLER_TYPE;
    readonly writeLimit: number;
    // private getFormatHandler(): ContentHandler;
    getNewContentHandler(): ContentHandler;
    getNewContentHandler(arg0: OutputStream, arg1: Charset): ContentHandler;
    getType(): BasicContentHandlerFactory$HANDLER_TYPE;
    getWriteLimit(): number;
    isThrowOnWriteLimitReached(): boolean;
}