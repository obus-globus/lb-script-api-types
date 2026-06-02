import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostTargetMappingNode } from '../../../../com/oracle/truffle/host/HostTargetMappingNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostTargetMappingNodeGen$Uncached extends HostTargetMappingNode implements UnadoptableNode {
    static NO_RESULT: Object;
    private constructor()
    execute(arg0Value: Node, arg1Value: Object, arg2Value: Class<Object>, arg3Value: HostContext, arg4Value: InteropLibrary, arg5Value: boolean, arg6Value: number, arg7Value: number): Object;
}