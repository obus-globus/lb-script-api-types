import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExpressionElement } from '../../../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { Type } from '../../../../../kroppeb/stareval/function/Type.d.ts'
export class CustomUniforms$Builder$Variable extends Record {
    private constructor(type: Type, name: string, expression: ExpressionElement, uniform: boolean)
    // private expression: ExpressionElement;
    // private name: string;
    // private type: Type;
    // private uniform: boolean;
    equals(arg0: Object | null): boolean;
    expression(): ExpressionElement;
    hashCode(): number;
    name(): string;
    toString(): string;
    type(): Type;
    uniform(): boolean;
}