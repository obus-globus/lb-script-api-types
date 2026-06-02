import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostFieldDesc } from '../../../../com/oracle/truffle/host/HostFieldDesc.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostObject$LookupFieldNode extends Node {
    constructor()
    doCached(receiver: HostObject, clazz: Class<Object>, name: string, onlyStatic: boolean, cachedStatic: boolean, cachedClazz: Class<Object>, cachedName: string, cachedField: HostFieldDesc): HostFieldDesc;
    doUncached(receiver: HostObject, clazz: Class<Object>, name: string, onlyStatic: boolean): HostFieldDesc;
    execute(node: Node, receiver: HostObject, clazz: Class<Object>, name: string, onlyStatic: boolean): HostFieldDesc;
}