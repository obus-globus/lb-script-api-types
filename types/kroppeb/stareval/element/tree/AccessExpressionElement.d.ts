import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessibleExpressionElement } from '../../../../kroppeb/stareval/element/AccessibleExpressionElement.d.ts'
export class AccessExpressionElement extends Record implements AccessibleExpressionElement {
    constructor(base: AccessibleExpressionElement, index: string)
    // private base: AccessibleExpressionElement;
    // private index: string;
    base(): AccessibleExpressionElement;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    index(): string;
    toString(): string;
}