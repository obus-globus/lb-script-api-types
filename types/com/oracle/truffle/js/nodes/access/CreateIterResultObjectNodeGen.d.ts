import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CreateIterResultObjectNodeGen extends CreateIterResultObjectNode {
    static create(paramcontext: JSContext): CreateIterResultObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    execute(arg0Value: Object, arg1Value: boolean): JSObject;
}