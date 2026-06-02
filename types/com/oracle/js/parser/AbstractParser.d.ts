import type { ErrorManager } from '../../../../com/oracle/js/parser/ErrorManager.d.ts'
import type { JSErrorType } from '../../../../com/oracle/js/parser/JSErrorType.d.ts'
import type { Lexer } from '../../../../com/oracle/js/parser/Lexer.d.ts'
import type { Lexer$LexerToken } from '../../../../com/oracle/js/parser/Lexer$LexerToken.d.ts'
import type { ParserException } from '../../../../com/oracle/js/parser/ParserException.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { TokenStream } from '../../../../com/oracle/js/parser/TokenStream.d.ts'
import type { TokenType } from '../../../../com/oracle/js/parser/TokenType.d.ts'
import type { IdentNode } from '../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LiteralNode } from '../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export abstract class AbstractParser extends Object {
    constructor(source: Source, errors: ErrorManager, strict: boolean, lineOffset: number)
    // private errors: ErrorManager;
    // private finish: number;
    // private isStrictMode: boolean;
    // private k: number;
    // private last: TokenType;
    // private lexer: Lexer;
    // private line: number;
    // private lineOffset: number;
    // private linePosition: number;
    // private previousToken: number;
    // private source: Source;
    // private start: number;
    // private stream: TokenStream;
    // private token: number;
    // private type: TokenType;
    T(i: number): TokenType;
    // private checkDirectiveComment(): void;
    createIdentNode(identToken: number, identFinish: number, name: TruffleString): IdentNode;
    error(errorType: JSErrorType, message: string): ParserException;
    error(errorType: JSErrorType, message: string, errorToken: number): ParserException;
    error(message: string): ParserException;
    error(message: string, errorToken: number): ParserException;
    expect(expected: TokenType): void;
    expectDontAdvance(expected: TokenType): void;
    expectMessage(expected: TokenType): string;
    expectMessage(expected: TokenType, errorToken: number): string;
    getIdent(): IdentNode;
    getIdentifierName(): IdentNode;
    getLiteral(): LiteralNode<Object>;
    getNumberToStringConverter(): (param0: Number) => TruffleString;
    getToken(i: number): number;
    getValue(): Object;
    getValue(valueToken: number): Object;
    getValueNoEscape(): Object;
    getValueNoEscape(valueToken: number): Object;
    isIdentifierName(): boolean;
    isIdentifierName(currentToken: number): boolean;
    // private isInterned(name: TruffleString): boolean;
    isNonStrictModeIdent(): boolean;
    next(): TokenType;
    nextOrEOL(): TokenType;
    // private nextToken(): TokenType;
    validateLexerToken(lexerToken: Lexer$LexerToken): void;
    warning(errorType: JSErrorType, message: string, errorToken: number): void;
}