import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleStringBuilder } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { JSONStringifyStringNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONStringifyStringNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { StringBuilderProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSONStringifyStringNodeGen extends JSONStringifyStringNode {
    static create(paramcontext: JSContext): JSONStringifyStringNode;
    static jsonQuote(paramstringBuilderProfile: StringBuilderProfile, paramsb: TruffleStringBuilderUTF16, paramvalueStr: TruffleString, paramreadCharNode: TruffleString$ReadCharUTF16Node, paramappendCharNode: TruffleStringBuilder$AppendCharUTF16Node, paramappendStringNode: TruffleStringBuilder$AppendStringNode, paramappendSubstringNode: TruffleStringBuilder$AppendSubstringByteIndexNode): TruffleStringBuilder;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: Object, arg2Value: JSObject): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: JSObject): Object;
}