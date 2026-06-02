import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ArrayLiteralNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode.d.ts'
import type { ArrayLiteralNode$ArrayContentType } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode$ArrayContentType.d.ts'
import type { ArrayLiteralNode$DefaultArrayLiteralWithSpreadNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode$DefaultArrayLiteralWithSpreadNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayLiteralNodeFactory$DefaultArrayLiteralWithSpreadNodeGen extends ArrayLiteralNode$DefaultArrayLiteralWithSpreadNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramelements: (Object | null)[]): ArrayLiteralNode;
    static create(paramcontext: JSContext, paramelements: (Object | null)[]): ArrayLiteralNode$DefaultArrayLiteralWithSpreadNode;
    static createByteArray(paramvalues: (Object | null)[]): number[];
    static createDoubleArray(paramvalues: (Object | null)[]): number[];
    static createIntArray(paramvalues: (Object | null)[]): number[];
    static createWithSpread(paramcontext: JSContext, paramelements: (Object | null)[]): ArrayLiteralNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static identifyPrimitiveContentType(paramvalues: (Object | null)[], paramcreateBytes: boolean): ArrayLiteralNode$ArrayContentType;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, elements: JavaScriptNode[])
    // private state_0_: number;
    execute(frameValue: VirtualFrame): JSArrayObject;
    executeVoid(frameValue: VirtualFrame): void;
}