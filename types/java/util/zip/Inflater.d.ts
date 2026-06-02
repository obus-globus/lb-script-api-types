import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Inflater$InflaterZStreamRef } from '../../../java/util/zip/Inflater$InflaterZStreamRef.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Inflater extends Object implements AutoCloseable {
    constructor()
    constructor(arg0: boolean)
    readonly bytesRead: number;
    readonly bytesWritten: number;
    // private finished: boolean;
    readonly input: ByteBuffer;
    // private inputArray: number[];
    // private inputConsumed: number;
    // private inputLim: number;
    // private inputPos: number;
    // private needDict: boolean;
    // private outputConsumed: number;
    // private pendingOutput: boolean;
    // private zsRef: Inflater$InflaterZStreamRef;
    close(): void;
    end(): void;
    // private ensureOpen(): void;
    finished(): boolean;
    getAdler(): number;
    getBytesRead(): number;
    getBytesWritten(): number;
    getRemaining(): number;
    getTotalIn(): number;
    getTotalOut(): number;
    hasPendingOutput(): boolean;
    inflate(arg0: ByteBuffer): number;
    inflate(arg0: number[]): number;
    inflate(arg0: number[], arg1: number, arg2: number): number;
    // private inflateBufferBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
    // private inflateBufferBytes(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;
    // private inflateBytesBuffer(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: number, arg5: number): number;
    // private inflateBytesBytes(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number;
    needsDictionary(): boolean;
    needsInput(): boolean;
    reset(): void;
    setDictionary(arg0: ByteBuffer): void;
    setDictionary(arg0: number[]): void;
    setDictionary(arg0: number[], arg1: number, arg2: number): void;
    setInput(arg0: ByteBuffer): void;
    setInput(arg0: number[]): void;
    setInput(arg0: number[], arg1: number, arg2: number): void;
}