import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
export abstract class ArrayLengthNode$ArrayLengthWriteNode extends ArrayLengthNode {
    static create(paramstrict: boolean): ArrayLengthNode$ArrayLengthWriteNode;
    static createSetOrDelete(paramstrict: boolean): ArrayLengthNode$ArrayLengthWriteNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeVoid(array: JSArrayObject, length: number): void;
}