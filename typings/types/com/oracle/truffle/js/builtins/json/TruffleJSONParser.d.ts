import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { JSONParseRecord } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONParseRecord.d.ts'
import type { TruffleJSONParser$Mode } from '../../../../../../com/oracle/truffle/js/builtins/json/TruffleJSONParser$Mode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class TruffleJSONParser extends Object {
    constructor(context: JSContext)
    constructor(context: JSContext, mode: TruffleJSONParser$Mode)
    // private context: JSContext;
    // private len: number;
    // private mode: TruffleJSONParser$Mode;
    // private parseDepth: number;
    // private parseStr: TruffleString;
    // private pos: number;
    // private withSource: boolean;
    decDepth(): void;
    error(message: string): RuntimeException;
    expectChar(expected: string): void;
    get(): string;
    get(posParam: number): string;
    getBooleanLiteral(): boolean;
    getJSONNumber(): Number;
    getJSONString(): TruffleString;
    getNullLiteral(): Object;
    hexDigitValue(c: string): number;
    // private incDepth(): void;
    isBooleanLiteral(c: string): boolean;
    isExponentPart(): boolean;
    isLiteral(literalStr: TruffleString, literalPos: number): boolean;
    isNullLiteral(c: string): boolean;
    parse(value: TruffleString, realm: JSRealm): Object;
    parseAsDouble(sign: number, valueStr: TruffleString): Number;
    parseBooleanLiteral(): Object;
    // private parseJSONArray(realm: JSRealm): Object;
    parseJSONElementList(arrayObject: JSArrayObject, realm: JSRealm, parseRecord: JSONParseRecord): void;
    // private parseJSONMember(object: JSObject, realm: JSRealm, parseRecord: JSONParseRecord): void;
    // private parseJSONMemberList(object: JSObject, realm: JSRealm, parseRecord: JSONParseRecord): void;
    parseJSONNumber(): Object;
    // private parseJSONObject(realm: JSRealm): Object;
    parseJSONString(): Object;
    parseJSONStringCharacters(): TruffleString;
    parseJSONValue(realm: JSRealm): Object;
    parseNullLiteral(): Object;
    // private parseRecordForLiteral(parsedValue: Object, startPos: number): Object;
    posValid(): boolean;
    skipChar(): void;
    skipChar(expected: string): void;
    skipExponent(): void;
    skipString(expected: TruffleString): void;
    skipWhitespace(): void;
    // private unexpectedEndOfInputMessage(): string;
    // private unexpectedNumber(): RuntimeException;
    // private unexpectedString(): RuntimeException;
    // private unexpectedToken(): RuntimeException;
    unquoteJSON(string: TruffleString, sLength: number, posFirstBackslash: number): TruffleString;
    unquoteJSONUnicode(string: TruffleString, posBackslash: number, builder: TruffleStringBuilderUTF16): void;
}