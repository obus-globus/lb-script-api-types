import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { SimpleConfigOrigin } from '../../../../com/typesafe/config/impl/SimpleConfigOrigin.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Tokenizer$ProblemException } from '../../../../com/typesafe/config/impl/Tokenizer$ProblemException.d.ts'
import type { Tokenizer$TokenIterator$WhitespaceSaver } from '../../../../com/typesafe/config/impl/Tokenizer$TokenIterator$WhitespaceSaver.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Tokenizer$TokenIterator extends Object implements Iterator<Token> {
    constructor(arg0: ConfigOrigin, arg1: Reader, arg2: boolean)
    // private allowComments: boolean;
    // private buffer: number[];
    // private input: Reader;
    // private lineNumber: number;
    // private lineOrigin: ConfigOrigin;
    // private origin: SimpleConfigOrigin;
    // private tokens: Token[];
    // private whitespaceSaver: Tokenizer$TokenIterator$WhitespaceSaver;
    // private appendTripleQuotedString(arg0: StringBuilder, arg1: StringBuilder): void;
    forEachRemaining(arg0: (param0: Token) => void): void;
    hasNext(): boolean;
    next(): Token;
    // private nextCharAfterWhitespace(arg0: Tokenizer$TokenIterator$WhitespaceSaver): number;
    // private nextCharRaw(): number;
    // private problem(arg0: string): Tokenizer$ProblemException;
    // private problem(arg0: string, arg1: string): Tokenizer$ProblemException;
    // private problem(arg0: string, arg1: string, arg2: boolean): Tokenizer$ProblemException;
    // private problem(arg0: string, arg1: string, arg2: boolean, arg3: Throwable): Tokenizer$ProblemException;
    // private problem(arg0: string, arg1: string, arg2: Throwable): Tokenizer$ProblemException;
    // private pullComment(arg0: number): Token;
    // private pullEscapeSequence(arg0: StringBuilder, arg1: StringBuilder): void;
    // private pullNextToken(arg0: Tokenizer$TokenIterator$WhitespaceSaver): Token;
    // private pullNumber(arg0: number): Token;
    // private pullPlusEquals(): Token;
    // private pullQuotedString(): Token;
    // private pullSubstitution(): Token;
    // private pullUnquotedText(): Token;
    // private putBack(arg0: number): void;
    // private queueNextToken(): void;
    remove(): void;
    // private startOfComment(arg0: number): boolean;
}