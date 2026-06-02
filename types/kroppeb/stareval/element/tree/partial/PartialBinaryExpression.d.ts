import type { ExpressionElement } from '../../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { PriorityOperatorElement } from '../../../../../kroppeb/stareval/element/PriorityOperatorElement.d.ts'
import type { BinaryExpressionElement } from '../../../../../kroppeb/stareval/element/tree/BinaryExpressionElement.d.ts'
import type { PartialExpression } from '../../../../../kroppeb/stareval/element/tree/partial/PartialExpression.d.ts'
import type { BinaryOp } from '../../../../../kroppeb/stareval/parser/BinaryOp.d.ts'
export class PartialBinaryExpression extends PartialExpression implements PriorityOperatorElement {
    constructor(arg0: ExpressionElement, arg1: BinaryOp)
    // private left: ExpressionElement;
    // private op: BinaryOp;
    getPriority(): number;
    resolveWith(arg0: ExpressionElement): BinaryExpressionElement;
    toString(): string;
}