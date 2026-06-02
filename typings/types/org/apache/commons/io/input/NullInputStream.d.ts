import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { AbstractInputStream } from '../../../../../org/apache/commons/io/input/AbstractInputStream.d.ts'
export class NullInputStream extends AbstractInputStream {
    static INSTANCE: NullInputStream;
    static nullInputStream(): InputStream;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean, arg2: boolean)
    // private mark: number;
    // private markSupported: boolean;
    readonly position: number;
    // private readLimit: number;
    readonly size: number;
    // private throwEofException: boolean;
    available(): number;
    // private checkThrowEof(arg0: string): void;
    close(): void;
    getPosition(): number;
    getSize(): number;
    // private handleEof(): number;
    init(): NullInputStream;
    mark(arg0: number): void;
    markSupported(): boolean;
    processByte(): number;
    processBytes(arg0: number[], arg1: number, arg2: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}