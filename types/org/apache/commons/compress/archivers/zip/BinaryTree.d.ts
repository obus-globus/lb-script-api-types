import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BitStream } from '../../../../../../org/apache/commons/compress/archivers/zip/BitStream.d.ts'
export class BinaryTree extends Object {
    constructor(arg0: number)
    // private tree: number[];
    addLeaf(arg0: number, arg1: number, arg2: number, arg3: number): void;
    read(arg0: BitStream): number;
}