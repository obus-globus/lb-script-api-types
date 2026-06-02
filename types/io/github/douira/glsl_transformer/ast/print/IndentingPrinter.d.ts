import type { DelegateTokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/DelegateTokenProcessor.d.ts'
import type { TokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenProcessor.d.ts'
import type { PrintToken } from '../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
export class IndentingPrinter extends DelegateTokenProcessor {
    constructor()
    constructor(arg0: TokenProcessor)
    constructor(arg0: TokenProcessor, arg1: string, arg2: number)
    // private indent: string;
    // private indentLevel: number;
    // private indentMultiplier: number;
    // private indentationPrinted: boolean;
    appendToken(arg0: PrintToken): void;
}