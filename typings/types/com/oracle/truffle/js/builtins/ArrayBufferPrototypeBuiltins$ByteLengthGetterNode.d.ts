import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayBufferObject$Direct } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Direct.d.ts'
import type { JSArrayBufferObject$Heap } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Heap.d.ts'
import type { JSArrayBufferObject$Interop } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Interop.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export abstract class ArrayBufferPrototypeBuiltins$ByteLengthGetterNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, getMaxByteLength: boolean)
    // private getMaxByteLength: boolean;
    directArrayBuffer(thisObj: JSArrayBufferObject$Direct): number;
    heapArrayBuffer(thisObj: JSArrayBufferObject$Heap): number;
    interopArrayBuffer(thisObj: JSArrayBufferObject$Interop, interop: InteropLibrary): number;
}