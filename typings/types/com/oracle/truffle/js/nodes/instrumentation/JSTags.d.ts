import type { NodeObjectDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/instrumentation/NodeObjectDescriptor.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSTags extends Object {
    static ALL: Class<Object>[];
    static createNodeObjectDescriptor(): NodeObjectDescriptor;
    static createNodeObjectDescriptor(paramname: string, paramvalue: Object): NodeObjectDescriptor;
    private constructor()
}