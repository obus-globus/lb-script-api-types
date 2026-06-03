import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class UTF32Reader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: IOContext, arg1: InputStream, arg2: number[], arg3: number, arg4: number, arg5: boolean)
    // private _bigEndian: boolean;
    // private _buffer: number[];
    // private _byteCount: number;
    // private _charCount: number;
    // private _context: IOContext;
    // private _in: InputStream;
    // private _length: number;
    // private _managedBuffers: boolean;
    // private _ptr: number;
    // private _surrogate: string;
    // private _tmpBuf: string[];
    close(): void;
    // private freeBuffers(): void;
    // private loadMore(arg0: number): boolean;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    // private reportBounds(arg0: string[], arg1: number, arg2: number): void;
    // private reportInvalid(arg0: number, arg1: number, arg2: string): void;
    // private reportStrangeStream(): void;
    // private reportUnexpectedEOF(arg0: number, arg1: number): void;
}