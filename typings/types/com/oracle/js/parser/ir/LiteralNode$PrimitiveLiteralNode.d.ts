import type { Lexer$LexerToken } from '../../../../../com/oracle/js/parser/Lexer$LexerToken.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LiteralNode } from '../../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { PropertyKey } from '../../../../../com/oracle/js/parser/ir/PropertyKey.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class LiteralNode$PrimitiveLiteralNode<T extends Object | number | string | boolean> extends LiteralNode<T> implements PropertyKey {
    static newInstance(paramtoken: number, paramvalue: TruffleString): LiteralNode$PrimitiveLiteralNode<TruffleString>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Lexer$LexerToken): LiteralNode<Lexer$LexerToken>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: (Object | null)[]): LiteralNode<(Object | null)[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Expression[]): LiteralNode<(Object | null)[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Expression[], paramhasSpread: boolean, paramhasTrailingComma: boolean): LiteralNode<(Object | null)[]>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: boolean): LiteralNode<boolean>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Number): LiteralNode<Number>;
    static newInstance(paramtoken: number, paramfinish: number, paramvalue: Number, paramtoStringConverter: (param0: Number) => TruffleString): LiteralNode<Number>;
    static newInstance(paramtoken: number, paramfinish: number): LiteralNode<Object>;
    private constructor(literalNode: LiteralNode$PrimitiveLiteralNode<T>)
    private constructor(token: number, finish: number, value: T)
    getPropertyName(): string;
    getPropertyNameTS(): TruffleString;
}