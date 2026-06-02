import type { Object } from '../../../java/lang/Object.d.ts'
import type { Element } from '../../../kroppeb/stareval/element/Element.d.ts'
import type { ExpressionElement } from '../../../kroppeb/stareval/element/ExpressionElement.d.ts'
import type { BinaryOp } from '../../../kroppeb/stareval/parser/BinaryOp.d.ts'
import type { ParserOptions } from '../../../kroppeb/stareval/parser/ParserOptions.d.ts'
import type { UnaryOp } from '../../../kroppeb/stareval/parser/UnaryOp.d.ts'
export class Parser extends Object {
    static parse(paramarg0: string, paramarg1: ParserOptions): ExpressionElement;
    constructor()
    // private stack: Element[];
    canReadAccess(): boolean;
    canReadBinaryOp(): boolean;
    // private commaReduce(arg0: number): void;
    // private expressionReducePop(): ExpressionElement;
    // private expressionReducePop(arg0: number): ExpressionElement;
    getFinal(arg0: number): ExpressionElement;
    // private peek(): Element;
    // private pop(): Element;
    // private push(arg0: Element): void;
    visitAccess(arg0: string): void;
    visitBinaryOperator(arg0: BinaryOp): void;
    visitClosingParenthesis(arg0: number): void;
    visitComma(arg0: number): void;
    visitId(arg0: string): void;
    visitNumber(arg0: string): void;
    visitOpeningParenthesis(): void;
    visitUnaryOperator(arg0: UnaryOp): void;
}