import type { File } from '../../../../java/io/File.d.ts'
import type { FilterOutputStream } from '../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
export abstract class CompressFilterOutputStream<T extends OutputStream> extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: T)
    readonly closed: AtomicBoolean;
    // private finished: boolean;
    checkOpen(): void;
    close(): void;
    finish(): void;
    isClosed(): boolean;
    isFinished(): boolean;
    out(): T;
    write(arg0: File): number;
    write(arg0: Path[]): number;
    writeUsAscii(arg0: string): number[];
    writeUsAsciiRaw(arg0: string): number[];
    writeUtf8(arg0: string): number[];
}