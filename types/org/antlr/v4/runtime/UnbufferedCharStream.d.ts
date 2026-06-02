import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export class UnbufferedCharStream extends Object implements CharStream {
    static EOF: number;
    static UNKNOWN_SOURCE_NAME: string;
    constructor()
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: InputStream, arg1: number, arg2: Charset)
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: number)
    constructor(arg0: number)
    // private currentCharIndex: number;
    // private data: number[];
    // private input: Reader;
    // private lastChar: number;
    // private lastCharBufferStart: number;
    // private n: number;
    name: string;
    // private numMarkers: number;
    // private p: number;
    LA(arg0: number): number;
    add(arg0: number): void;
    consume(): void;
    fill(arg0: number): number;
    getBufferStartIndex(): number;
    getSourceName(): string;
    getText(arg0: Interval): string;
    index(): number;
    mark(): number;
    nextChar(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
    sync(arg0: number): void;
}