import type { DelegateTokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/DelegateTokenProcessor.d.ts'
import type { TokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenProcessor.d.ts'
import type { PrintToken } from '../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
export class CompactPrinter extends DelegateTokenProcessor {
    constructor()
    constructor(arg0: TokenProcessor)
    appendToken(arg0: PrintToken): void;
}