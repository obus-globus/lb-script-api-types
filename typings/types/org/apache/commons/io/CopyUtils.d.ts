import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CopyUtils extends Object {
    static copy(paramarg0: InputStream, paramarg1: OutputStream): number;
    static copy(paramarg0: Reader, paramarg1: Writer): number;
    static copy(paramarg0: number[], paramarg1: OutputStream): void;
    static copy(paramarg0: number[], paramarg1: Writer): void;
    static copy(paramarg0: number[], paramarg1: Writer, paramarg2: string): void;
    static copy(paramarg0: InputStream, paramarg1: Writer): void;
    static copy(paramarg0: InputStream, paramarg1: Writer, paramarg2: string): void;
    static copy(paramarg0: Reader, paramarg1: OutputStream): void;
    static copy(paramarg0: Reader, paramarg1: OutputStream, paramarg2: string): void;
    static copy(paramarg0: string, paramarg1: OutputStream): void;
    static copy(paramarg0: string, paramarg1: OutputStream, paramarg2: string): void;
    static copy(paramarg0: string, paramarg1: Writer): void;
    constructor()
}