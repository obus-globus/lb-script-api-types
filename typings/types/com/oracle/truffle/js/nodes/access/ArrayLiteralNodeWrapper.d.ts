import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ArrayLiteralNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode.d.ts'
import type { ArrayLiteralNode$ArrayContentType } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode$ArrayContentType.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayLiteralNodeWrapper extends ArrayLiteralNode implements InstrumentableNode$WrapperNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramelements: (Object | null)[]): ArrayLiteralNode;
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
    constructor(copy: ArrayLiteralNode, delegateNode: ArrayLiteralNode, probeNode: ProbeNode)
    readonly delegateNode: ArrayLiteralNode;
    readonly probeNode: ProbeNode;
    execute(frame: VirtualFrame): JSArrayObject;
    executeBoolean(frame: VirtualFrame): boolean;
    executeDouble(frame: VirtualFrame): number;
    executeInt(frame: VirtualFrame): number;
    executeVoid(frame: VirtualFrame): void;
    getDelegateNode(): ArrayLiteralNode;
    getProbeNode(): ProbeNode;
}