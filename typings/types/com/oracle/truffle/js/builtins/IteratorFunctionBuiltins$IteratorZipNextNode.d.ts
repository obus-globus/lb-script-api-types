import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { IteratorFunctionBuiltins$IteratorZipArgs } from '../../../../../com/oracle/truffle/js/builtins/IteratorFunctionBuiltins$IteratorZipArgs.d.ts'
import type { IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorStepNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSIteratorHelperObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSIteratorHelperObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IteratorFunctionBuiltins$IteratorZipNextNode extends IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode<IteratorFunctionBuiltins$IteratorZipArgs> {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    copyUninitialized(): IteratorPrototypeBuiltins$IteratorFromGeneratorNode$IteratorFromGeneratorImplNode<IteratorFunctionBuiltins$IteratorZipArgs>;
    // private finishResults(args: IteratorFunctionBuiltins$IteratorZipArgs, results: Object[]): Object;
    next(thisObj: JSIteratorHelperObject, iteratorStepNode: IteratorStepNode, iteratorValueNode: IteratorValueNode, iteratorCloseNode: IteratorCloseNode, errorBranch: InlinedBranchProfile): Object;
}