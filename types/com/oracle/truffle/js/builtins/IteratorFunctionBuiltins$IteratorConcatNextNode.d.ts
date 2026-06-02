import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorFunctionBuiltins$ConcatArgs } from '../../../../../com/oracle/truffle/js/builtins/IteratorFunctionBuiltins$ConcatArgs.d.ts'
import type { IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode.d.ts'
import type { GetIteratorFromMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFromMethodNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorNextNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSIteratorHelperObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSIteratorHelperObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IteratorFunctionBuiltins$IteratorConcatNextNode extends IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode<IteratorFunctionBuiltins$ConcatArgs> {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    copyUninitialized(): IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode<IteratorFunctionBuiltins$ConcatArgs>;
    next(thisObj: JSIteratorHelperObject, getIteratorFromMethodNode: GetIteratorFromMethodNode, iteratorNextNode: IteratorNextNode, iteratorCompleteNode: IteratorCompleteNode, iteratorValueNode: IteratorValueNode): Object;
}