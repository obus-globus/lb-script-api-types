import type { BufferRecycler } from '../../../../../../../com/azure/json/implementation/jackson/core/util/BufferRecycler.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TextBuffer extends Object {
    static fromInitial(paramarg0: string[]): TextBuffer;
    constructor(arg0: BufferRecycler)
    private constructor(arg0: BufferRecycler, arg1: string[])
    // private _allocator: BufferRecycler;
    // private _currentSegment: string[];
    // private _currentSize: number;
    // private _hasSegments: boolean;
    // private _inputBuffer: string[];
    // private _inputLen: number;
    // private _inputStart: number;
    // private _resultArray: string[];
    // private _resultString: string;
    // private _segmentSize: number;
    // private _segments: string[][];
    append(arg0: string): void;
    append(arg0: string[], arg1: number, arg2: number): void;
    append(arg0: string, arg1: number, arg2: number): void;
    // private buf(arg0: number): string[];
    // private carr(arg0: number): string[];
    // private clearSegments(): void;
    contentsAsArray(): string[];
    contentsAsDecimal(): BigDecimal;
    contentsAsDouble(): number;
    contentsAsInt(arg0: boolean): number;
    contentsAsLong(arg0: boolean): number;
    contentsAsString(): string;
    contentsToWriter(arg0: Writer): number;
    emptyAndGetCurrentSegment(): string[];
    // private expand(arg0: number): void;
    expandCurrentSegment(): string[];
    finishCurrentSegment(): string[];
    getCurrentSegment(): string[];
    getCurrentSegmentSize(): number;
    getTextBuffer(): string[];
    getTextOffset(): number;
    releaseBuffers(): void;
    resetWithCopy(arg0: string[], arg1: number, arg2: number): void;
    resetWithShared(arg0: string[], arg1: number, arg2: number): void;
    resetWithString(arg0: string): void;
    // private resultArray(): string[];
    setCurrentAndReturn(arg0: number): string;
    setCurrentLength(arg0: number): void;
    size(): number;
    toString(): string;
    // private unshare(arg0: number): void;
}