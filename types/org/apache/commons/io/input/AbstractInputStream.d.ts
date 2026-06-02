import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export abstract class AbstractInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor()
    readonly closed: boolean;
    checkOpen(): void;
    close(): void;
    isClosed(): boolean;
    setClosed(arg0: boolean): void;
}