import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExpressionElement } from '../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { BinaryOp } from '../../../../kroppeb/stareval/parser/BinaryOp.d.ts'
export class BinaryExpressionElement extends Record implements ExpressionElement {
    constructor(op: BinaryOp, left: ExpressionElement, right: ExpressionElement)
    // private left: ExpressionElement;
    // private op: BinaryOp;
    // private right: ExpressionElement;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): ExpressionElement;
    op(): BinaryOp;
    right(): ExpressionElement;
    toString(): string;
}