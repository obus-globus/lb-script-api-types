import type { Token } from '../../../../kroppeb/stareval/element/token/Token.d.ts'
import type { BinaryOp } from '../../../../kroppeb/stareval/parser/BinaryOp.d.ts'
export class BinaryOperatorToken extends Token {
    constructor(arg0: BinaryOp)
    op: BinaryOp;
    toString(): string;
}