import type { JsonArray } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonArray.d.ts'
import type { JsonBool } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonBool.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonInt } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonInt.d.ts'
import type { JsonNull } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonNull.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { JsonObject$JsonObjectProperty } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject$JsonObjectProperty.d.ts'
import type { JsonString } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonString.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Json extends Object {
    static array(paramvalues: (Object | null)[]): JsonArray;
    static array(paramvalues: (Object | null)[]): JsonArray;
    static array(paramvalues: Stream<Object>): JsonArray;
    static array(paramarray: string[]): JsonValue;
    static array(paramarray: number[]): JsonValue;
    static array(paramarray: number[]): JsonValue;
    static arrayUnsigned(paramarray: number[]): JsonArray;
    static nullValue(): JsonNull;
    static obj(paramproperties: (Object | null)[]): JsonObject;
    static prop(paramname: string, paramvalue: boolean): JsonObject$JsonObjectProperty;
    static prop(paramname: string, paramvalue: JsonConvertible): JsonObject$JsonObjectProperty;
    static prop(paramname: string, paramvalue: number): JsonObject$JsonObjectProperty;
    static prop(paramname: string, paramvalue: (Object | null)[]): JsonObject$JsonObjectProperty;
    static prop(paramname: string, paramvalue: string): JsonObject$JsonObjectProperty;
    static prop(paramname: string, paramvalue: Stream<Object>): JsonObject$JsonObjectProperty;
    static prop(paramname: string, paramvalue: number): JsonObject$JsonObjectProperty;
    static val(paramval: boolean): JsonBool;
    static val(paramval: number): JsonInt;
    static val(paramval: number): JsonInt;
    static val(paramval: string): JsonString;
    constructor()
}