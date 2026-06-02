import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BufferedTokenStream } from '../../../../../org/antlr/v4/runtime/BufferedTokenStream.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class CachingParser$CacheContents extends Record {
    constructor(parseTree: ParserRuleContext, tokenStream: BufferedTokenStream)
    // private parseTree: ParserRuleContext;
    // private tokenStream: BufferedTokenStream;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    parseTree(): ParserRuleContext;
    toString(): string;
    tokenStream(): BufferedTokenStream;
}