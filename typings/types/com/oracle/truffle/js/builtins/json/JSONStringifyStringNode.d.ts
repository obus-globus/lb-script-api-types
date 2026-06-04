import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleStringBuilder } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { JSONData } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONData.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { StringBuilderProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSONStringifyStringNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): JSONStringifyStringNode;
    static jsonQuote(paramstringBuilderProfile: StringBuilderProfile, paramsb: TruffleStringBuilderUTF16, paramvalueStr: TruffleString, paramreadCharNode: TruffleString$ReadCharUTF16Node, paramappendCharNode: TruffleStringBuilder$AppendCharUTF16Node, paramappendStringNode: TruffleStringBuilder$AppendStringNode, paramappendSubstringNode: TruffleStringBuilder$AppendSubstringByteIndexNode): TruffleStringBuilder;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private builderToStringNode: TruffleStringBuilder$ToStringNode;
    // private callToJSONFunction: JSFunctionCallNode;
    // private getToJSONProperty: PropertyGetNode;
    // private stringBuilderProfile: StringBuilderProfile;
    // private append(sb: TruffleStringBuilderUTF16, s: TruffleString): void;
    // private append(sb: TruffleStringBuilderUTF16, value: string): void;
    // private append(sb: TruffleStringBuilderUTF16, value: number): void;
    // private appendBoolean(builder: TruffleStringBuilderUTF16, value: boolean): void;
    // private appendColon(sb: TruffleStringBuilderUTF16, data: JSONData): void;
    // private appendNumber(builder: TruffleStringBuilderUTF16, number: Object): void;
    // private appendSeparator(sb: TruffleStringBuilderUTF16, data: JSONData, indent: number): void;
    // private builderToString(sb: TruffleStringBuilderUTF16): TruffleString;
    // private callToJSONMethod(key: Object, value: Object, toJSON: Object): Object;
    // private concatEnd(sb: TruffleStringBuilderUTF16, data: JSONData, stepback: number, close: string, hasContent: boolean): void;
    // private concatFirstStep(sb: TruffleStringBuilderUTF16, data: JSONData): void;
    // private concatStart(builder: TruffleStringBuilderUTF16, c: string): void;
    execute(data: Object, keyStr: Object, holder: JSObject): Object;
    // private getPreparedJSONPropertyValue(data: JSONData, keyStr: TruffleString, holder: Object): Object;
    // private getPreparedJSONPropertyValueFromForeignArray(data: JSONData, key: number, holder: Object): Object;
    // private getPreparedJSONPropertyValueFromJSArray(data: JSONData, key: number, holder: JSObject): Object;
    // private jsonQuote(builder: TruffleStringBuilderUTF16, valueStr: TruffleString): TruffleStringBuilder;
    jsonStrMain(jsonData: Object, keyStr: TruffleString, holder: JSObject): Object;
    // private prepareJSONPropertyValue(data: JSONData, key: Object, holder: Object, valueArg: Object): Object;
    // private serializeForeignObject(sb: TruffleStringBuilderUTF16, data: JSONData, obj: Object): void;
    // private serializeForeignObjectProperties(sb: TruffleStringBuilderUTF16, data: JSONData, obj: Object, indent: number): void;
    // private serializeJSONArray(sb: TruffleStringBuilderUTF16, data: JSONData, value: Object): TruffleStringBuilder;
    // private serializeJSONObject(sb: TruffleStringBuilderUTF16, data: JSONData, value: Object): TruffleStringBuilder;
    // private serializeJSONObjectProperties(sb: TruffleStringBuilderUTF16, data: JSONData, value: Object, indent: number, keys: (Object | null)[]): TruffleStringBuilder;
    // private serializeJSONPropertyValue(builder: TruffleStringBuilderUTF16, data: JSONData, value: Object): void;
    // private truffleGetSize(obj: Object): Object;
    // private tryToJSONMethod(key: Object, value: Object): Object;
}