import type { ExpressionElement } from '../../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { PartialExpression } from '../../../../../kroppeb/stareval/element/tree/partial/PartialExpression.d.ts'
export class UnfinishedArgsExpression extends PartialExpression {
    constructor()
    tokens: ExpressionElement[];
    toString(): string;
}