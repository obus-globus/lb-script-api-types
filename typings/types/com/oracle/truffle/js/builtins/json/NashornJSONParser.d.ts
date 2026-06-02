import type { ParserException } from '../../../../../../com/oracle/js/parser/ParserException.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class NashornJSONParser extends Object {
    constructor(source: TruffleString, context: JSContext)
    // private context: JSContext;
    // private length: number;
    // private pos: number;
    // private source: TruffleString;
    // private addObjectProperty(object: JSDynamicObject, idStr: Object, value: Object): void;
    // private error(message: string, start: number): ParserException;
    error(message: string, start: number, length: number): ParserException;
    // private expectColon(): void;
    // private expectedError(start: number, expected: string, found: string): ParserException;
    // private next(): number;
    // private numberError(start: number): ParserException;
    parse(): Object;
    // private parseArray(): Object;
    // private parseEscapeSequence(): string;
    // private parseHexDigit(): number;
    // private parseKeyword(keyword: TruffleString, value: Object): Object;
    // private parseLiteral(): Object;
    // private parseNumber(): Number;
    // private parseObject(): Object;
    // private parseString(): TruffleString;
    // private parseUnicodeEscape(): string;
    // private peek(): number;
    // private skipDigits(): void;
    // private skipWhiteSpace(): void;
    // private syntaxError(start: number, reason: string): ParserException;
    // private trailingCommaError(start: number, found: string): ParserException;
}