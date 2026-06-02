import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class InputStream extends Object implements Closeable {
    static nullInputStream(): InputStream;
    constructor()
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readAllBytes(): number[];
    readNBytes(arg0: number[], arg1: number, arg2: number): number;
    readNBytes(arg0: number): number[];
    reset(): void;
    skip(arg0: number): number;
    skipNBytes(arg0: number): void;
    transferTo(arg0: OutputStream): number;
}