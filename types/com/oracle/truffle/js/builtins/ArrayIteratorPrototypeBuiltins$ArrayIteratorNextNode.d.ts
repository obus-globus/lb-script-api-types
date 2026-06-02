import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedIntValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedIntValueProfile.d.ts'
import type { ArrayIteratorGetLengthNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayIteratorGetLengthNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayIteratorObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayIteratorObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayIteratorPrototypeBuiltins$ArrayIteratorNextNode extends JSBuiltinNode {
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
    doArrayIterator(iterator: JSArrayIteratorObject, array: Object, createIterResultObjectNode: CreateIterResultObjectNode, readElementNode: ReadElementNode, getLengthNode: ArrayIteratorGetLengthNode, toJSIndex: LongToIntOrDoubleNode, iterationKindProfile: InlinedIntValueProfile): JSObject;
}