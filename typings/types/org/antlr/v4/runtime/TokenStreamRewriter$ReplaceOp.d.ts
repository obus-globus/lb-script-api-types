import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TokenStreamRewriter } from '../../../../org/antlr/v4/runtime/TokenStreamRewriter.d.ts'
import type { TokenStreamRewriter$RewriteOperation } from '../../../../org/antlr/v4/runtime/TokenStreamRewriter$RewriteOperation.d.ts'
export class TokenStreamRewriter$ReplaceOp extends TokenStreamRewriter$RewriteOperation {
    constructor(null_: TokenStreamRewriter, arg1: number, arg2: number, arg3: Object)
    // private lastIndex: number;
    execute(arg0: StringBuilder): number;
    toString(): string;
}