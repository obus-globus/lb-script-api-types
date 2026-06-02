import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostTargetMapping } from '../../../../com/oracle/truffle/host/HostTargetMapping.d.ts'
import type { HostTargetMappingNode$SingleMappingNode } from '../../../../com/oracle/truffle/host/HostTargetMappingNode$SingleMappingNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostTargetMappingNodeGen$SingleMappingNodeGen extends HostTargetMappingNode$SingleMappingNode {
    static create(): HostTargetMappingNode$SingleMappingNode;
    static getUncached(): HostTargetMappingNode$SingleMappingNode;
    private constructor()
    // private allowsImplementation_: boolean;
    // private state_0_: number;
    // private toHostRecursive__field1_: Node;
    execute(arg0Value: Object, arg1Value: HostTargetMapping, arg2Value: HostContext, arg3Value: InteropLibrary, arg4Value: boolean): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: HostTargetMapping, arg2Value: HostContext, arg3Value: InteropLibrary, arg4Value: boolean): Object;
}