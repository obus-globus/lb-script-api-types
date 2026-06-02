import type { File } from '../../../../../java/io/File.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { LockableFileWriter$Builder } from '../../../../../org/apache/commons/io/output/LockableFileWriter$Builder.d.ts'
export class LockableFileWriter extends Writer {
    static builder(): LockableFileWriter$Builder;
    static nullWriter(): Writer;
    constructor(arg0: File)
    constructor(arg0: File, arg1: Charset)
    constructor(arg0: File, arg1: Charset, arg2: boolean, arg3: string)
    constructor(arg0: File, arg1: boolean)
    constructor(arg0: File, arg1: boolean, arg2: string)
    constructor(arg0: File, arg1: string)
    constructor(arg0: File, arg1: string, arg2: boolean, arg3: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean, arg2: string)
    private constructor(arg0: LockableFileWriter$Builder)
    // private lockFile: File;
    // private out: Writer;
    close(): void;
    // private createLock(): void;
    flush(): void;
    // private initWriter(arg0: File, arg1: Charset, arg2: boolean): Writer;
    // private testLockDir(arg0: File): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}