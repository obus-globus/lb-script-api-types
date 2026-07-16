import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { OperatorsBuiltins$ConstructOperatorSetNode } from '../../../../../com/oracle/truffle/js/builtins/OperatorsBuiltins$ConstructOperatorSetNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { OperatorSet } from '../../../../../com/oracle/truffle/js/runtime/objects/OperatorSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OperatorsBuiltinsFactory$ConstructOperatorSetNodeGen extends OperatorsBuiltins$ConstructOperatorSetNode {
    static create(paramcontext: JSContext): OperatorsBuiltins$ConstructOperatorSetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    execute(arg0Value: Object, arg1Value: Object[]): OperatorSet;
}