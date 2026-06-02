import type { Reader } from '../../java/io/Reader.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class BufferedReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: number)
    // private cb: string[];
    // private in: Reader;
    // private markedChar: number;
    // private markedSkipLF: boolean;
    // private nChars: number;
    // private nextChar: number;
    // private readAheadLimit: number;
    // private skipLF: boolean;
    close(): void;
    // private ensureOpen(): void;
    // private fill(): void;
    lines(): Stream<string>;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    // private read1(arg0: string[], arg1: number, arg2: number): number;
    readLine(): string;
    readLine(arg0: boolean, arg1: (Object | null)[]): string;
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
}