import type { PrintToken } from '../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TokenProcessor extends Object{
    appendToken(arg0: PrintToken): void;
    generateString(): string;
}