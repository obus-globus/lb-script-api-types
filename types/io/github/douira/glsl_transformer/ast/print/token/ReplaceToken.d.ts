import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ASTPrinterBase } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/ASTPrinterBase.d.ts'
import type { PrintToken } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
export class ReplaceToken extends PrintToken {
    static fromMatch(paramarg0: PrintToken, paramarg1: string): ReplaceToken;
    static fromMatchAndNodeCondition(paramarg0: PrintToken, paramarg1: string, paramarg2: (param0: ASTNode) => boolean): ReplaceToken;
    static fromNodeCondition(paramarg0: PrintToken, paramarg1: (param0: ASTNode) => boolean): ReplaceToken;
    constructor(arg0: PrintToken, arg1: (param0: PrintToken) => boolean)
    constructor(arg0: PrintToken, arg1: string, arg2: (param0: ASTNode) => boolean)
    // private condition: (param0: PrintToken) => boolean;
    // private replacement: PrintToken;
    calculateContent(): string;
    getContent(): string;
    replace(arg0: PrintToken, arg1: ASTPrinterBase): void;
}