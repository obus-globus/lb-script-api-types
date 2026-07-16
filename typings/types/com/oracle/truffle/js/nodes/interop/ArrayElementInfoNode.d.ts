import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSArrayBase } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBase.d.ts'
export abstract class ArrayElementInfoNode extends JavaScriptBaseNode {
    static INSERTABLE: number;
    static MODIFIABLE: number;
    static READABLE: number;
    static REMOVABLE: number;
    static WRITABLE: number;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(receiver: JSArrayBase, index: number, query: number): TriState;
    executeBoolean(receiver: JSArrayBase, index: number, query: number): boolean;
    executeCheck(receiver: JSArrayBase, index: number, query: number): void;
}