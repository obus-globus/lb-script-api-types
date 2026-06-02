import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class RequireObjectCoercibleNode extends JavaScriptBaseNode {
    static create(): RequireObjectCoercibleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doForeignObject(object: Object, interop: InteropLibrary): void;
    doNullOrUndefined(object: Object): void;
    execute(operand: Object): Object;
    executeVoid(operand: Object): void;
}