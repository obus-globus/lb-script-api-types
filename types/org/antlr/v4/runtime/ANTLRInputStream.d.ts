import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export class ANTLRInputStream extends Object implements CharStream {
    static EOF: number;
    static INITIAL_BUFFER_SIZE: number;
    static READ_BUFFER_SIZE: number;
    static UNKNOWN_SOURCE_NAME: string;
    constructor()
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: InputStream, arg1: number, arg2: number)
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: number)
    constructor(arg0: Reader, arg1: number, arg2: number)
    constructor(arg0: string[], arg1: number)
    constructor(arg0: string)
    // private data: string[];
    // private n: number;
    name: string;
    // private p: number;
    LA(arg0: number): number;
    LT(arg0: number): number;
    consume(): void;
    getSourceName(): string;
    getText(arg0: Interval): string;
    index(): number;
    load(arg0: Reader, arg1: number, arg2: number): void;
    mark(): number;
    release(arg0: number): void;
    reset(): void;
    seek(arg0: number): void;
    size(): number;
    toString(): string;
}