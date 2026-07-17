import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostToValuesNode } from '../../../../com/oracle/truffle/host/HostToValuesNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
export class HostToValuesNodeGen$Uncached extends HostToValuesNode implements UnadoptableNode {
    private constructor()
    execute(arg0Value: Node, arg1Value: HostContext, arg2Value: Object[]): Value[];
}