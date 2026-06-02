import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostObject$LookupInnerClassNode extends Node {
    constructor()
    doCached(clazz: Class<Object>, name: string, cachedClazz: Class<Object>, cachedName: string, cachedInnerClass: Class<Object>): Class<Object>;
    doUncached(clazz: Class<Object>, name: string): Class<Object>;
    execute(node: Node, outerclass: Class<Object>, name: string): Class<Object>;
}