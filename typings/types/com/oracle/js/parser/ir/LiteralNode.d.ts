import type { Lexer$LexerToken } from '../../../../../com/oracle/js/parser/Lexer$LexerToken.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LiteralNode$PrimitiveLiteralNode } from '../../../../../com/oracle/js/parser/ir/LiteralNode$PrimitiveLiteralNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export abstract class LiteralNode<T extends unknown> extends Expression {
    static newInstance(paramtoken: number, paramvalue: TruffleString): LiteralNode$PrimitiveLiteralNode<TruffleString>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Lexer$LexerToken): LiteralNode<Lexer$LexerToken>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Expression[]): LiteralNode<Expression[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Expression[], paramhasSpread: boolean, paramhasTrailingComma: boolean): LiteralNode<Expression[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: boolean): LiteralNode<boolean>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Number): LiteralNode<Number>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Number, paramtoStringConverter: (param0: Number) => TruffleString): LiteralNode<Number>;
    static newInstance(paramtoken: number, paramfinish: number): LiteralNode<Object>;
    constructor(literalNode: LiteralNode<T>)
    constructor(literalNode: LiteralNode<T>, newValue: T)
    constructor(token: number, finish: number, value: T)
    readonly value: T;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getElementExpressions(): Expression[];
    getObject(): Object;
    getString(): string;
    getValue(): T;
    isArray(): boolean;
    isString(): boolean;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}