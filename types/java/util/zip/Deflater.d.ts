import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Deflater$DeflaterZStreamRef } from '../../../java/util/zip/Deflater$DeflaterZStreamRef.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Deflater extends Object implements AutoCloseable {
    static BEST_COMPRESSION: number;
    static BEST_SPEED: number;
    static DEFAULT_COMPRESSION: number;
    static DEFAULT_STRATEGY: number;
    static DEFLATED: number;
    static FILTERED: number;
    static FULL_FLUSH: number;
    static HUFFMAN_ONLY: number;
    static NO_COMPRESSION: number;
    static NO_FLUSH: number;
    static SYNC_FLUSH: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    readonly bytesRead: number;
    readonly bytesWritten: number;
    // private finish: boolean;
    // private finished: boolean;
    readonly input: ByteBuffer;
    // private inputArray: number[];
    // private inputLim: number;
    // private inputPos: number;
    readonly level: number;
    // private setParams: boolean;
    readonly strategy: number;
    // private zsRef: Deflater$DeflaterZStreamRef;
    close(): void;
    deflate(arg0: ByteBuffer): number;
    deflate(arg0: ByteBuffer, arg1: number): number;
    deflate(arg0: number[]): number;
    deflate(arg0: number[], arg1: number, arg2: number): number;
    deflate(arg0: number[], arg1: number, arg2: number, arg3: number): number;
    // private deflateBufferBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
    // private deflateBufferBytes(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number, arg6: number, arg7: number): number;
    // private deflateBytesBuffer(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
    // private deflateBytesBytes(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number, arg7: number, arg8: number): number;
    end(): void;
    // private ensureOpen(): void;
    finish(): void;
    finished(): boolean;
    getAdler(): number;
    getBytesRead(): number;
    getBytesWritten(): number;
    getTotalIn(): number;
    getTotalOut(): number;
    needsInput(): boolean;
    reset(): void;
    setDictionary(arg0: ByteBuffer): void;
    setDictionary(arg0: number[]): void;
    setDictionary(arg0: number[], arg1: number, arg2: number): void;
    setInput(arg0: ByteBuffer): void;
    setInput(arg0: number[]): void;
    setInput(arg0: number[], arg1: number, arg2: number): void;
    setLevel(arg0: number): void;
    setStrategy(arg0: number): void;
    shouldFinish(): boolean;
}