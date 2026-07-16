import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayLengthNode$ArrayLengthWriteNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthWriteNode.d.ts'
import type { ArrayLengthNode$SetArrayLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$SetArrayLengthNode.d.ts'
import type { ArrayLengthNodeFactory$SetArrayLengthNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNodeFactory$SetArrayLengthNodeGen$CachedData.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
export class ArrayLengthNodeFactory$SetArrayLengthNodeGen extends ArrayLengthNode$SetArrayLengthNode {
    static create(paramstrict: boolean): ArrayLengthNode$ArrayLengthWriteNode;
    static create(paramstrict: boolean): ArrayLengthNode$SetArrayLengthNode;
    static createSetOrDelete(paramstrict: boolean): ArrayLengthNode$ArrayLengthWriteNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(strict: boolean)
    // private cached_cache: ArrayLengthNodeFactory$SetArrayLengthNodeGen$CachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSArrayObject, arg1Value: number): void;
    executeVoid(arg0Value: JSArrayObject, arg1Value: number): void;
}