import type { BufferRecycler } from '../../../../../../../com/azure/json/implementation/jackson/core/util/BufferRecycler.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
export class ByteArrayBuilder extends OutputStream {
    static NO_BYTES: number[];
    static fromInitial(paramarg0: number[], paramarg1: number): ByteArrayBuilder;
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: BufferRecycler)
    private constructor(arg0: BufferRecycler, arg1: number[], arg2: number)
    constructor(arg0: BufferRecycler, arg1: number)
    // private _bufferRecycler: BufferRecycler;
    // private _currBlock: number[];
    // private _currBlockPtr: number;
    // private _pastBlocks: number[][];
    // private _pastLen: number;
    // private _allocMore(): void;
    append(arg0: number): void;
    appendThreeBytes(arg0: number): void;
    appendTwoBytes(arg0: number): void;
    close(): void;
    completeAndCoalesce(arg0: number): number[];
    finishCurrentSegment(): number[];
    flush(): void;
    getCurrentSegment(): number[];
    getCurrentSegmentLength(): number;
    release(): void;
    reset(): void;
    setCurrentSegmentLength(arg0: number): void;
    size(): number;
    toByteArray(): number[];
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}