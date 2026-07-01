import type { Lexer$LineInfoReceiver } from '../../../../com/oracle/js/parser/Lexer$LineInfoReceiver.d.ts'
import type { Lexer$RegexToken } from '../../../../com/oracle/js/parser/Lexer$RegexToken.d.ts'
import type { Lexer$State } from '../../../../com/oracle/js/parser/Lexer$State.d.ts'
import type { Scanner } from '../../../../com/oracle/js/parser/Scanner.d.ts'
import type { Scanner$State } from '../../../../com/oracle/js/parser/Scanner$State.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { StringPool } from '../../../../com/oracle/js/parser/StringPool.d.ts'
import type { TokenStream } from '../../../../com/oracle/js/parser/TokenStream.d.ts'
import type { TokenType } from '../../../../com/oracle/js/parser/TokenType.d.ts'
import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Lexer extends Scanner implements StringPool {
    static isEOL(paramch: string): boolean;
    static isStringLineTerminator(paramch: string): boolean;
    static isWhitespace(paramch: string): boolean;
    constructor(source: Source, stream: TokenStream, scripting: boolean, ecmaScriptVersion: number, shebang: boolean, isModule: boolean, allowBigInt: boolean, annexB: boolean)
    constructor(source: Source, start: number, len: number, stream: TokenStream, scripting: boolean, ecmaScriptVersion: number, shebang: boolean, isModule: boolean, pauseOnFunctionBody: boolean, allowBigInt: boolean, annexB: boolean)
    // private allowBigInt: boolean;
    // private annexB: boolean;
    // private ecmaScriptVersion: number;
    // private internedStrings: { [key: string]: TruffleString };
    // private isModule: boolean;
    // private last: TokenType;
    // private linePosition: number;
    // private nested: boolean;
    // private pauseOnFunctionBody: boolean;
    // private pauseOnNextLeftBrace: boolean;
    // private pauseOnRightBrace: boolean;
    // private pendingLine: number;
    // private scripting: boolean;
    // private shebang: boolean;
    // private source: Source;
    // private stream: TokenStream;
    add(type: TokenType, start: number): void;
    add(type: TokenType, start: number, end: number): void;
    canStartLiteral(token: TokenType): boolean;
    checkIdentForKeyword(token: number, keyword: string): boolean;
    // private consumeDigits(type: TokenType, base: number, allowInitialSeparator: boolean, allowSeparators: boolean): number;
    // private consumeRequiredDigit(type: TokenType, radix: number, prefixStart: number): void;
    // private editString(stringType: TokenType, stringState: Lexer$State): void;
    error(message: string, type: TokenType, start: number, length: number): void;
    getValueOf(token: number, strict: boolean): Object;
    getValueOf(token: number, strict: boolean, convertUnicode: boolean): Object;
    // private hasHereMarker(identStart: number, identLength: number): boolean;
    // private hexSequence(length: number, type: TokenType): number;
    // private identifierEqual(aStart: number, aLength: number, bStart: number, bLength: number): boolean;
    // private isES2020(): boolean;
    // private isES6(): boolean;
    lexify(): void;
    // private lexifyEditString(stringType: TokenType): void;
    // private octalSequence(): number;
    restoreState(state: Scanner$State): void;
    saveState(): Lexer$State;
    // private scanHereString(lir: Lexer$LineInfoReceiver, oldState: Lexer$State): boolean;
    // private scanIdentifier(): number;
    // private scanIdentifierOrKeyword(): void;
    scanLiteral(token: number, startTokenType: TokenType, lir: Lexer$LineInfoReceiver): boolean;
    scanNumber(): void;
    // private scanPrivateIdentifier(): void;
    // private scanRegEx(): boolean;
    scanString(add: boolean): void;
    // private scanTemplate(): void;
    scanTemplateSpan(): void;
    // private scanTemplateString(type: TokenType): void;
    // private seenEOL(): boolean;
    // private skipEOL(addEOL: boolean): void;
    // private skipLine(addEOL: boolean): void;
    // private skipMultiLineComment(): void;
    // private skipShebang(): void;
    // private skipSingleLineComment(): void;
    // private skipSingleLineHTMLCloseComment(): void;
    // private skipSingleLineHTMLOpenComment(): void;
    // private skipUntilEOL(): void;
    // private skipWhitespace(addEOL: boolean): void;
    stringIntern(candidate: TruffleString): TruffleString;
    stringIntern(candidate: string): TruffleString;
    // private unicodeEscapeSequence(type: TokenType): number;
    // private valueOfIdent(start: number, length: number, convertUnicode: boolean): TruffleString;
    valueOfPattern(start: number, length: number): Lexer$RegexToken;
    valueOfRawString(token: number): TruffleString;
    // private valueOfString(start: number, length: number, strict: boolean): TruffleString;
    valueOfTaggedTemplateString(token: number): TruffleString;
    // private varlenHexSequence(type: TokenType): number;
}