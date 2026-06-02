import type { Closeable } from '../../../../../../../java/io/Closeable.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ColumnFileReader extends Object implements Closeable {
    constructor(arg0: Reader, arg1: string, arg2: string)
    // private bof: boolean;
    // private buffer: string[];
    // private bufferLimit: number;
    // private bufferPos: number;
    // private columnSeparator: string;
    // private eof: boolean;
    // private eol: boolean;
    // private indentationChar: string;
    readonly lineNumber: number;
    // private markIdx: number;
    // private markedBofs: (Object | null)[];
    // private markedBufferPositions: number[];
    // private markedEofs: (Object | null)[];
    // private markedEols: (Object | null)[];
    // private markedLineNumbers: number[];
    // private reader: Reader;
    close(): void;
    discardMark(): void;
    // private discardMark(arg0: number): void;
    // private fillBuffer(arg0: number, arg1: boolean, arg2: boolean): boolean;
    getLineNumber(): number;
    hasExtraIndents(): boolean;
    isAtEof(): boolean;
    isAtEol(): boolean;
    mark(): number;
    nextCol(): string;
    nextCol(arg0: boolean): string;
    nextCol(arg0: string): boolean;
    nextCols(arg0: boolean): string;
    nextIntCol(): number;
    nextLine(arg0: number): boolean;
    // private read(arg0: boolean, arg1: boolean, arg2: boolean, arg3: string): string;
    reset(): number;
    reset(arg0: number): void;
}