import type { Lexer$LexerToken } from '../../../../../com/oracle/js/parser/Lexer$LexerToken.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextNode } from '../../../../../com/oracle/js/parser/ir/LexicalContextNode.d.ts'
import type { LiteralNode } from '../../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { LiteralNode$PrimitiveLiteralNode } from '../../../../../com/oracle/js/parser/ir/LiteralNode$PrimitiveLiteralNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class LiteralNode$ArrayLiteralNode extends LiteralNode<Expression[]> implements LexicalContextNode {
    static newInstance(paramtoken: number, paramvalue: TruffleString): LiteralNode$PrimitiveLiteralNode<TruffleString>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Lexer$LexerToken): LiteralNode<Lexer$LexerToken>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: (Object | null)[]): LiteralNode<(Object | null)[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Expression[]): LiteralNode<(Object | null)[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Expression[], paramhasSpread: boolean, paramhasTrailingComma: boolean): LiteralNode<(Object | null)[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: boolean): LiteralNode<boolean>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Number): LiteralNode<Number>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Number, paramtoStringConverter: (param0: Number) => TruffleString): LiteralNode<Number>;
    static newInstance(paramtoken: number, paramfinish: number): LiteralNode<Object>;
    private constructor(node: LiteralNode$ArrayLiteralNode, value: Expression[])
    constructor(token: number, finish: number, value: Expression[])
    constructor(token: number, finish: number, value: Expression[], hasSpread: boolean, hasTrailingComma: boolean)
    // private hasSpread: boolean;
    // private hasTrailingComma: boolean;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getElementExpressions(): Expression[];
    hasSpread(): boolean;
    hasTrailingComma(): boolean;
    isArray(): boolean;
    // private setValue(lc: LexicalContext, value: Expression[]): LiteralNode$ArrayLiteralNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}