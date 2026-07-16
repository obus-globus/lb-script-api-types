import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { StringPrototypeBuiltins$JSStringCharCodeAtNode$Inlined } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringCharCodeAtNode$Inlined.d.ts'
import type { StringPrototypeBuiltins$JSStringOperation } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSBuiltinNode$Inlineable } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode$Inlineable.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringCharCodeAtNode extends StringPrototypeBuiltins$JSStringOperation implements JSBuiltinNode$Inlineable {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    charCodeAtGeneric(thisObj: Object, indexObj: Object, readChar: TruffleString$ReadCharUTF16Node, toNumberNode: JSToNumberNode, indexOutOfBounds: InlinedConditionProfile): Object;
    charCodeAtInBounds(thisStr: TruffleString, pos: number, readChar: TruffleString$ReadCharUTF16Node): number;
    charCodeAtOutOfBounds(thisStr: TruffleString, pos: number): number;
    createInlined(): StringPrototypeBuiltins$JSStringCharCodeAtNode$Inlined;
}