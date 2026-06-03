import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Preprocessor } from '../../../org/anarres/cpp/Preprocessor.d.ts'
export class CppReader extends Reader implements Closeable {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader)
    constructor(arg0: Preprocessor)
    // private cpp: Preprocessor;
    // private idx: number;
    // private token: string;
    addMacro(arg0: string): void;
    addMacro(arg0: string, arg1: string): void;
    close(): void;
    getPreprocessor(): Preprocessor;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    // private refill(): boolean;
}