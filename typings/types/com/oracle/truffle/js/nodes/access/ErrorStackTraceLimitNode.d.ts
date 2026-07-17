import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { DynamicObject$GetPropertyFlagsNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyFlagsNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/IsNumberNode.d.ts'
import type { JSToIntegerAsLongNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsLongNode.d.ts'
export abstract class ErrorStackTraceLimitNode extends JavaScriptBaseNode {
    static create(): ErrorStackTraceLimitNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getStackTraceLimit: DynamicObject$GetNode;
    // private getStackTraceLimitFlags: DynamicObject$GetPropertyFlagsNode;
    doInt(isNumber: IsNumberNode, toInteger: JSToIntegerAsLongNode): number;
    executeInt(): number;
}