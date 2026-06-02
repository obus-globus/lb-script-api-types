import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExpressionElement } from '../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { UnaryOp } from '../../../../kroppeb/stareval/parser/UnaryOp.d.ts'
export class UnaryExpressionElement extends Record implements ExpressionElement {
    constructor(op: UnaryOp, inner: ExpressionElement)
    // private inner: ExpressionElement;
    // private op: UnaryOp;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    inner(): ExpressionElement;
    op(): UnaryOp;
    toString(): string;
}