import type { CodecOutputList$CodecOutputListRecycler } from '../../../../io/netty/handler/codec/CodecOutputList$CodecOutputListRecycler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CodecOutputList$CodecOutputLists extends Object implements CodecOutputList$CodecOutputListRecycler {
    constructor(arg0: number)
    // private count: number;
    // private currentIdx: number;
    // private elements: (Object | null)[][];
    // private mask: number;
    getOrCreate(): (Object | null)[];
    recycle(arg0: (Object | null)[]): void;
}