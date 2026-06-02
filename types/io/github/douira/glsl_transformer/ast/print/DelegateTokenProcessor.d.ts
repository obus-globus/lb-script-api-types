import type { TokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenProcessor.d.ts'
import type { PrintToken } from '../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DelegateTokenProcessor extends Object implements TokenProcessor {
    constructor(arg0: TokenProcessor)
    // private delegate: TokenProcessor;
    appendToken(arg0: PrintToken): void;
    generateString(): string;
}