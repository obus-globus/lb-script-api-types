import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { JSONBuiltins$GetGapNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONBuiltins$GetGapNode.d.ts'
import type { JSONBuiltins$ToReplacerListNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONBuiltins$ToReplacerListNode.d.ts'
import type { JSONStringifyStringNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONStringifyStringNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSIsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsArrayNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { StringBuilderProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSONBuiltins$JSONStringifyNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private createWrapperPropertyNode: CreateDataPropertyNode;
    // private jsonStringifyStringNode: JSONStringifyStringNode;
    createStringBuilderProfile(): StringBuilderProfile;
    stringifyAStringNoReplacer(str: TruffleString, replacer: Object, space: Object, stringBuilderProfile: StringBuilderProfile, readCharNode: TruffleString$ReadCharUTF16Node, appendRawValueNode: TruffleStringBuilder$AppendCharUTF16Node, appendStringNode: TruffleStringBuilder$AppendStringNode, appendSubstringNode: TruffleStringBuilder$AppendSubstringByteIndexNode, builderToStringNode: TruffleStringBuilder$ToStringNode): Object;
    // private stringifyIntl(value: Object, space: Object, replacerFnObj: Object, replacerList: Object[], node: Node, getGapNode: JSONBuiltins$GetGapNode): Object;
    stringifyNoReplacer(value: Object, replacer: Object, space: Object, getGapNode: JSONBuiltins$GetGapNode): Object;
    stringifyWithReplacer(value: Object, replacer: Object, space: Object, node: Node, getGapNode: JSONBuiltins$GetGapNode, isCallableNode: IsCallableNode, isArrayNode: JSIsArrayNode, toReplacerListNode: JSONBuiltins$ToReplacerListNode): Object;
}