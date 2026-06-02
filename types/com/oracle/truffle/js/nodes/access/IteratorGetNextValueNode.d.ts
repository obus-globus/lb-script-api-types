import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IteratorGetNextValueNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramiterator: JavaScriptNode, paramdoneNode: JavaScriptNode, paramsetDone: boolean): IteratorGetNextValueNode;
    static create(paramcontext: JSContext, paramiterator: JavaScriptNode, paramdoneNode: JavaScriptNode, paramsetDone: boolean, paramreadValue: boolean): IteratorGetNextValueNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, iteratorNode: JavaScriptNode, doneNode: JavaScriptNode, setDone: boolean, readValue: boolean)
    // private doneResultNode: JavaScriptNode;
    // private getDoneNode: PropertyGetNode;
    // private getValueNode: PropertyGetNode;
    // private isObjectNode: IsObjectNode;
    // private iteratorNode: JavaScriptNode;
    // private methodCallNode: JSFunctionCallNode;
    // private readValue: boolean;
    // private setDone: boolean;
    // private toBooleanNode: JSToBooleanNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame, iteratorRecord: IteratorRecord): Object;
    // private iteratorNext(iteratorRecord: IteratorRecord): Object;
    iteratorStepAndGetValue(frame: VirtualFrame, iteratorRecord: IteratorRecord): Object;
}