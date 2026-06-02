import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExpressionElement } from '../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
export class FunctionCall extends Record implements ExpressionElement {
    constructor(id: string, args: ExpressionElement[])
    // private args: ExpressionElement[];
    // private id: string;
    args(): ExpressionElement[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): string;
    toString(): string;
}