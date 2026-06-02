import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export class ConsoleAppender$SystemOutStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    close(): void;
    flush(): void;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}