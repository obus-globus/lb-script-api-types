import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class UnwrapPromiseNode extends JavaScriptBaseNode {
    static create(): UnwrapPromiseNode;
    static getUncached(): UnwrapPromiseNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(promise: JSPromiseObject): Object;
    execute(promise: JSPromiseObject, promiseState: number, promiseResult: Object): Object;
    rejected(promise: JSPromiseObject, promiseState: number, promiseResult: Object): Object;
}