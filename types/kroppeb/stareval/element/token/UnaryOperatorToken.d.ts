import type { ExpressionElement } from '../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { PriorityOperatorElement } from '../../../../kroppeb/stareval/element/PriorityOperatorElement.d.ts'
import type { Token } from '../../../../kroppeb/stareval/element/token/Token.d.ts'
import type { UnaryExpressionElement } from '../../../../kroppeb/stareval/element/tree/UnaryExpressionElement.d.ts'
import type { UnaryOp } from '../../../../kroppeb/stareval/parser/UnaryOp.d.ts'
export class UnaryOperatorToken extends Token implements PriorityOperatorElement {
    constructor(arg0: UnaryOp)
    // private op: UnaryOp;
    getPriority(): number;
    resolveWith(arg0: ExpressionElement): UnaryExpressionElement;
    toString(): string;
}