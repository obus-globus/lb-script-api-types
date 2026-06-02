import type { AccessibleExpressionElement } from '../../../../kroppeb/stareval/element/AccessibleExpressionElement.d.ts'
import type { Token } from '../../../../kroppeb/stareval/element/token/Token.d.ts'
export class IdToken extends Token implements AccessibleExpressionElement {
    constructor(arg0: string)
    readonly id: string;
    getId(): string;
    toString(): string;
}