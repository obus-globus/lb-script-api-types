import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$ByteIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointNode.d.ts'
import type { TruffleString$CharIndexOfAnyCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CharIndexOfAnyCharUTF16Node.d.ts'
import type { ArrayPrototypeBuiltins$ArraySpeciesConstructorNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$ArraySpeciesConstructorNode.d.ts'
import type { StringPrototypeBuiltins$CreateRegExpStringIteratorNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$CreateRegExpStringIteratorNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsJSObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSToLengthNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpPrototypeBuiltins$JSRegExpMatchAllNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    createCreateRegExpStringIteratorNode(): StringPrototypeBuiltins$CreateRegExpStringIteratorNode;
    matchAll(regex: JSDynamicObject, stringObj: Object, node: Node, toStringNodeForInput: JSToStringNode, speciesConstructNode: ArrayPrototypeBuiltins$ArraySpeciesConstructorNode, getFlagsNode: PropertyGetNode, toStringNodeForFlags: JSToStringNode, getLastIndexNode: PropertyGetNode, toLengthNode: JSToLengthNode, setLastIndexNode: PropertySetNode, createRegExpStringIteratorNode: StringPrototypeBuiltins$CreateRegExpStringIteratorNode, isObjectNode: IsJSObjectNode, indexToNumber: LongToIntOrDoubleNode, stringIndexOfNode: TruffleString$ByteIndexOfCodePointNode, stringIndexOfAnyNode: TruffleString$CharIndexOfAnyCharUTF16Node): Object;
    matchAll(thisObj: Object, string: Object): Object;
}