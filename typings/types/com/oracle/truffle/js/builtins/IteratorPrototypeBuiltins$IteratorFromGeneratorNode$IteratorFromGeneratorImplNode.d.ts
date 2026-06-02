import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorPrototypeBuiltins$IteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorArgs.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { IteratorStepNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSIteratorHelperObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSIteratorHelperObject.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode<T extends IteratorPrototypeBuiltins$IteratorArgs> extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private createIterResultObjectNode: CreateIterResultObjectNode;
    // private indexToNumber: LongToIntOrDoubleNode;
    // private iteratorStepNode: IteratorStepNode;
    // private iteratorValueNode: IteratorValueNode;
    copyUninitialized(): IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode<T>;
    createResultContinue(thisObj: JSIteratorHelperObject, value: Object): Object;
    createResultDone(thisObj: JSIteratorHelperObject): Object;
    execute(frame: VirtualFrame, thisObj: Object): Object;
    getArgs(thisObj: JSIteratorHelperObject): T;
    getNextValue(thisObj: JSIteratorHelperObject, iterated: IteratorRecord): Object;
    indexToJS(index: number): Object;
    iteratorStep(iterated: IteratorRecord): Object;
    iteratorValue(next: Object): Object;
}