import type { TokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenProcessor.d.ts'
import type { PrintToken } from '../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SimplePrinter extends Object implements TokenProcessor {
    constructor()
    readonly builder: StringBuilder;
    appendToken(arg0: PrintToken): void;
    generateString(): string;
    getBuilder(): StringBuilder;
}