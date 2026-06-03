import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { UnwrapPromiseNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/UnwrapPromiseNode.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UnwrapPromiseNodeGen$Uncached extends UnwrapPromiseNode implements UnadoptableNode {
    static create(): UnwrapPromiseNode;
    static getUncached(): UnwrapPromiseNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(promise: JSPromiseObject): Object;
    execute(arg0Value: JSPromiseObject, arg1Value: number, arg2Value: Object): Object;
}