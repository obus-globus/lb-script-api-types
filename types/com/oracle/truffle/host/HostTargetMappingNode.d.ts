import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostTargetMapping } from '../../../../com/oracle/truffle/host/HostTargetMapping.d.ts'
import type { HostTargetMappingNode$SingleMappingNode } from '../../../../com/oracle/truffle/host/HostTargetMappingNode$SingleMappingNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostTargetMappingNode extends Node {
    static NO_RESULT: Object;
    constructor()
    doCached(operand: Object, targetType: Class<Object>, context: HostContext, interop: InteropLibrary, checkOnly: boolean, startPriority: number, endPriority: number, mappings: HostTargetMapping[], mappingNodes: HostTargetMappingNode$SingleMappingNode[]): Object;
    doUncached(operand: Object, targetType: Class<Object>, hostContext: HostContext, interop: InteropLibrary, checkOnly: boolean, startPriority: number, endPriority: number): Object;
    execute(node: Node, value: Object, targetType: Class<Object>, hostContext: HostContext, interop: InteropLibrary, checkOnly: boolean, startPriority: number, endPriority: number): Object;
}