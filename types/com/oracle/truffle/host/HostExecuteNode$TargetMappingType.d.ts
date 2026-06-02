import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode$TypeCheckNode } from '../../../../com/oracle/truffle/host/HostExecuteNode$TypeCheckNode.d.ts'
import type { HostTargetMapping } from '../../../../com/oracle/truffle/host/HostTargetMapping.d.ts'
import type { HostTargetMappingNode$SingleMappingNode } from '../../../../com/oracle/truffle/host/HostTargetMappingNode$SingleMappingNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostExecuteNode$TargetMappingType extends HostExecuteNode$TypeCheckNode {
    constructor(fallback: HostExecuteNode$TypeCheckNode, mappings: HostTargetMapping[], otherMappings: HostTargetMapping[], priority: number)
    // private fallback: HostExecuteNode$TypeCheckNode;
    // private mappingNodes: HostTargetMappingNode$SingleMappingNode[];
    // private mappings: HostTargetMapping[];
    // private otherMappingNodes: HostTargetMappingNode$SingleMappingNode[];
    // private otherMappings: HostTargetMapping[];
    // private priority: number;
    equals(obj: Object | null): boolean;
    execute(test: Object, interop: InteropLibrary, context: HostContext): boolean;
    hashCode(): number;
}