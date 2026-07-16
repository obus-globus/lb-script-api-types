import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/IsNumberNode.d.ts'
import type { JSToIntegerAsLongNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsLongNode.d.ts'
export abstract class ErrorStackTraceLimitNode extends JavaScriptBaseNode {
    static create(): ErrorStackTraceLimitNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getStackTraceLimit: DynamicObjectLibrary;
    doInt(isNumber: IsNumberNode, toInteger: JSToIntegerAsLongNode): number;
    executeInt(): number;
}