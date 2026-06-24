import type { HuffmanDecoder$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HuffmanDecoder$DecodingMemory extends Object {
    private constructor()
    private constructor(arg0: number)
    constructor(arg0: HuffmanDecoder$1)
    // private mask: number;
    // private memory: number[];
    // private wHead: number;
    // private wrappedAround: boolean;
    add(arg0: number): number;
    add(arg0: number[], arg1: number, arg2: number): void;
    // private incCounter(arg0: number): number;
    recordToBuffer(arg0: number, arg1: number, arg2: number[]): void;
}