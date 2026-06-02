import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { Readable } from '../../java/lang/Readable.d.ts'
import type { CharBuffer } from '../../java/nio/CharBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export abstract class Reader extends Object implements Closeable, Readable {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor()
    constructor(arg0: Object)
    // private lock: Object;
    // private skipBuffer: string[];
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    readAllAsString(): string;
    // private readAllCharsAsString(): string;
    readAllLines(): string[];
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
    transferTo(arg0: Writer): number;
}