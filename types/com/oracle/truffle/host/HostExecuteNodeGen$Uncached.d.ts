import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode } from '../../../../com/oracle/truffle/host/HostExecuteNode.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostExecuteNodeGen$Uncached extends HostExecuteNode implements UnadoptableNode {
    private constructor()
    execute(arg0Value: Node, arg1Value: HostMethodDesc, arg2Value: Object, arg3Value: Object[], arg4Value: HostContext): Object;
}