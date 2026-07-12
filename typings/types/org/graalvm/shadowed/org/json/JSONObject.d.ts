import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { JSONParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/JSONParserConfiguration.d.ts'
import type { JSONPointer } from '../../../../../org/graalvm/shadowed/org/json/JSONPointer.d.ts'
import type { JSONTokener } from '../../../../../org/graalvm/shadowed/org/json/JSONTokener.d.ts'
export class JSONObject extends Object {
    static NULL: Object;
    static doubleToString(paramd: number): string;
    static getNames(paramobject: Object): (Object | null)[];
    static getNames(paramjo: JSONObject): (Object | null)[];
    static numberToString(paramnumber: Number): string;
    static quote(paramstring: string, paramw: Writer): Writer;
    static quote(paramstring: string): string;
    static stringToValue(paramstring: string): Object;
    static testValidity(paramo: Object): void;
    static valueToString(paramvalue: Object): string;
    static wrap(paramobject: Object): Object;
    constructor()
    constructor(bean: Object)
    constructor(object: Object, ...names: string[])
    constructor(initialCapacity: number)
    constructor(source: string)
    constructor(baseName: string, locale: Locale)
    constructor(source: string, jsonParserConfiguration: JSONParserConfiguration)
    constructor(m: Map<Object | null, Object | null>)
    constructor(m: Map<Object | null, Object | null>, jsonParserConfiguration: JSONParserConfiguration)
    constructor(jo: JSONObject, ...names: string[])
    constructor(x: JSONTokener)
    constructor(x: JSONTokener, jsonParserConfiguration: JSONParserConfiguration)
    // private map: { [key: string]: Object };
    accumulate(key: string, value: Object): JSONObject;
    append(key: string, value: Object): JSONObject;
    clear(): void;
    entrySet(): Map$Entry<string, Object>[];
    get(key: string): Object;
    getBigDecimal(key: string): BigDecimal;
    getBigInteger(key: string): BigInteger;
    getBoolean(key: string): boolean;
    getDouble(key: string): number;
    getEnum<E extends Enum<E>>(clazz: Class<E>, key: string): E;
    getFloat(key: string): number;
    getInt(key: string): number;
    getJSONArray(key: string): Object[];
    getJSONObject(key: string): JSONObject;
    getLong(key: string): number;
    getMapType(): Class<Map<Object | null, Object | null>>;
    getNumber(key: string): Number;
    getString(key: string): string;
    has(key: string): boolean;
    increment(key: string): JSONObject;
    isEmpty(): boolean;
    isNull(key: string): boolean;
    keySet(): string[];
    keys(): Iterator<string>;
    length(): number;
    names(): Object[];
    opt(key: string): Object;
    optBigDecimal(key: string, defaultValue: BigDecimal): BigDecimal;
    optBigInteger(key: string, defaultValue: BigInteger): BigInteger;
    optBoolean(key: string): boolean;
    optBoolean(key: string, defaultValue: boolean): boolean;
    optBooleanObject(key: string): boolean;
    optBooleanObject(key: string, defaultValue: boolean): boolean;
    optDouble(key: string): number;
    optDouble(key: string, defaultValue: number): number;
    optDoubleObject(key: string): number;
    optDoubleObject(key: string, defaultValue: number): number;
    optEnum<E extends Enum<E>>(clazz: Class<E>, key: string): E;
    optEnum<E extends Enum<E>>(clazz: Class<E>, key: string, defaultValue: E): E;
    optFloat(key: string): number;
    optFloat(key: string, defaultValue: number): number;
    optFloatObject(key: string): number;
    optFloatObject(key: string, defaultValue: number): number;
    optInt(key: string): number;
    optInt(key: string, defaultValue: number): number;
    optIntegerObject(key: string): number;
    optIntegerObject(key: string, defaultValue: number): number;
    optJSONArray(key: string): Object[];
    optJSONArray(key: string, defaultValue: Object[]): Object[];
    optJSONObject(key: string): JSONObject;
    optJSONObject(key: string, defaultValue: JSONObject): JSONObject;
    optLong(key: string): number;
    optLong(key: string, defaultValue: number): number;
    optLongObject(key: string): number;
    optLongObject(key: string, defaultValue: number): number;
    optNumber(key: string): Number;
    optNumber(key: string, defaultValue: Number): Number;
    optQuery(jsonPointer: string): Object;
    optQuery(jsonPointer: JSONPointer): Object;
    optString(key: string): string;
    optString(key: string, defaultValue: string): string;
    // private populateMap(bean: Object): void;
    // private populateMap(bean: Object, objectsRecord: Object[]): void;
    put(key: string, value: Object): JSONObject;
    put(key: string, value: boolean): JSONObject;
    put(key: string, value: number): JSONObject;
    put(key: string, value: (Object | null)[]): JSONObject;
    put(key: string, value: Map<Object | null, Object | null>): JSONObject;
    putOnce(key: string, value: Object): JSONObject;
    putOpt(key: string, value: Object): JSONObject;
    query(jsonPointer: string): Object;
    query(jsonPointer: JSONPointer): Object;
    remove(key: string): Object;
    similar(other: Object): boolean;
    toJSONArray(names: Object[]): Object[];
    toMap(): { [key: string]: Object };
    toString(): string;
    toString(indentFactor: number): string;
    write(writer: Writer): Writer;
    write(writer: Writer, indentFactor: number, indent: number): Writer;
}