import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ConcatNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ConcatNode.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { StringBuilderProfile } from '../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayJoinNode extends ArrayPrototypeBuiltins$JSArrayOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, isTypedArrayImplementation: boolean)
    // private appendStringNode: TruffleStringBuilder$AppendStringNode;
    // private builderToStringNode: TruffleStringBuilder$ToStringNode;
    // private elementToStringNode: JSToStringNode;
    // private interopLibrary: InteropLibrary;
    // private separatorToStringNode: JSToStringNode;
    // private stringBuilderProfile: StringBuilderProfile;
    // private stringConcatNode: TruffleString$ConcatNode;
    // private append(sb: TruffleStringBuilderUTF16, s: TruffleString): void;
    // private builderToString(sb: TruffleStringBuilderUTF16): TruffleString;
    // private concat(a: TruffleString, b: TruffleString): TruffleString;
    // private getSeparatorToString(): JSToStringNode;
    // private isForeignNull(value: Object): boolean;
    // private isValidEntry(value: Object): boolean;
    join(thisObj: Object, joinStr: Object, separatorNotEmpty: InlinedConditionProfile, isZero: InlinedConditionProfile, isOne: InlinedConditionProfile, isTwo: InlinedConditionProfile, isSparse: InlinedConditionProfile, growProfile: InlinedBranchProfile, stackGrowProfile: InlinedBranchProfile): TruffleString;
    // private joinLoop(thisJSObject: Object, length: number, joinSeparator: TruffleString, appendSep: boolean): TruffleString;
    // private joinOne(thisObject: Object): TruffleString;
    // private joinSparse(thisObject: Object, length: number, joinSeparator: TruffleString, appendSep: boolean, node: Node, growProfile: InlinedBranchProfile): TruffleString;
    // private joinTwo(thisObject: Object, joinSeparator: TruffleString, appendSep: boolean): TruffleString;
    // private toStringOrEmpty(value: Object): TruffleString;
}