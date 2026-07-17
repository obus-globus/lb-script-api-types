import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToUInt16Node extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDouble(value: number): number;
    doDoubleAsLong(value: number): number;
    doGeneric(value: Object, toNumberNode: JSToNumberNode): number;
    doInt(value: number): number;
    executeChar(value: Object): string;
    executeInt(value: Object): number;
}