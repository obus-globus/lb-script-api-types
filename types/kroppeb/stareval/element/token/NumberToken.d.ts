import type { ExpressionElement } from '../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { Token } from '../../../../kroppeb/stareval/element/token/Token.d.ts'
export class NumberToken extends Token implements ExpressionElement {
    constructor(arg0: string)
    readonly number: string;
    getNumber(): string;
    toString(): string;
}