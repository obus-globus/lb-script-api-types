import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostObject$LookupConstructorNode extends Node {
    constructor()
    doCached(receiver: HostObject, clazz: Class<Object>, cachedClazz: Class<Object>, cachedMethod: HostMethodDesc): HostMethodDesc;
    doUncached(receiver: HostObject, clazz: Class<Object>): HostMethodDesc;
    execute(node: Node, receiver: HostObject, clazz: Class<Object>): HostMethodDesc;
}