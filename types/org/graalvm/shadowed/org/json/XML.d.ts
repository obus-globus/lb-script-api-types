import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { XMLParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/XMLParserConfiguration.d.ts'
import type { XMLXsiTypeConverter } from '../../../../../org/graalvm/shadowed/org/json/XMLXsiTypeConverter.d.ts'
export class XML extends Object {
    static AMP: string;
    static APOS: string;
    static BANG: string;
    static EQ: string;
    static GT: string;
    static LT: string;
    static NULL_ATTR: string;
    static QUEST: string;
    static QUOT: string;
    static SLASH: string;
    static TYPE_ATTR: string;
    static escape(paramstring: string): string;
    static noSpace(paramstring: string): void;
    static stringToValue(paramstring: string): Object;
    static stringToValue(paramstring: string, paramtypeConverter: XMLXsiTypeConverter<Object>): Object;
    static toJSONObject(paramreader: Reader): JSONObject;
    static toJSONObject(paramreader: Reader, paramkeepStrings: boolean): JSONObject;
    static toJSONObject(paramreader: Reader, paramkeepNumberAsString: boolean, paramkeepBooleanAsString: boolean): JSONObject;
    static toJSONObject(paramreader: Reader, paramconfig: XMLParserConfiguration): JSONObject;
    static toJSONObject(paramstring: string): JSONObject;
    static toJSONObject(paramstring: string, paramkeepStrings: boolean): JSONObject;
    static toJSONObject(paramstring: string, paramkeepNumberAsString: boolean, paramkeepBooleanAsString: boolean): JSONObject;
    static toJSONObject(paramstring: string, paramconfig: XMLParserConfiguration): JSONObject;
    static toString(paramobject: Object): string;
    static toString(paramobject: Object, paramindentFactor: number): string;
    static toString(paramobject: Object, paramtagName: string): string;
    static toString(paramobject: Object, paramtagName: string, paramindentFactor: number): string;
    static toString(paramobject: Object, paramtagName: string, paramconfig: XMLParserConfiguration): string;
    static toString(paramobject: Object, paramtagName: string, paramconfig: XMLParserConfiguration, paramindentFactor: number): string;
    static unescape(paramstring: string): string;
    constructor()
}