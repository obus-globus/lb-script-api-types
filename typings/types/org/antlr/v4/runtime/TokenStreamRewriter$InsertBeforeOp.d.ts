import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TokenStreamRewriter$RewriteOperation } from '../../../../org/antlr/v4/runtime/TokenStreamRewriter$RewriteOperation.d.ts'
export class TokenStreamRewriter$InsertBeforeOp extends TokenStreamRewriter$RewriteOperation {
    constructor(null_: TokenStreamRewriter$InsertBeforeOp, arg1: number, arg2: Object)
    execute(arg0: StringBuilder): number;
}