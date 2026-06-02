import type { DelegateTokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/DelegateTokenProcessor.d.ts'
import type { TokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenProcessor.d.ts'
import type { PrintToken } from '../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
import type { PresentSourceLocation } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/PresentSourceLocation.d.ts'
export class LineAnnotator extends DelegateTokenProcessor {
    constructor(arg0: TokenProcessor)
    // private lastLocationPrintedLines: number;
    // private lastPrintedLocation: PresentSourceLocation;
    // private lineEmpty: boolean;
    // private printedLines: number;
    appendToken(arg0: PrintToken): void;
    // private incrementLines(): void;
}