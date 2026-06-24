import type { HuffmanDecoder } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder.d.ts'
import type { HuffmanDecoder$BinaryTreeNode } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder$BinaryTreeNode.d.ts'
import type { HuffmanDecoder$DecoderState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanDecoder$DecoderState.d.ts'
import type { HuffmanState } from '../../../../../../org/apache/commons/compress/compressors/deflate64/HuffmanState.d.ts'
export class HuffmanDecoder$HuffmanCodes extends HuffmanDecoder$DecoderState {
    constructor(null_: HuffmanDecoder, arg1: HuffmanState, arg2: number[], arg3: number[])
    // private distanceTree: HuffmanDecoder$BinaryTreeNode;
    // private endOfBlock: boolean;
    // private lengthTree: HuffmanDecoder$BinaryTreeNode;
    // private runBuffer: number[];
    // private runBufferLength: number;
    // private runBufferPos: number;
    // private state: HuffmanState;
    available(): number;
    // private copyFromRunBuffer(arg0: number[], arg1: number, arg2: number): number;
    // private decodeNext(arg0: number[], arg1: number, arg2: number): number;
    hasData(): boolean;
    read(arg0: number[], arg1: number, arg2: number): number;
    state(): HuffmanState;
}