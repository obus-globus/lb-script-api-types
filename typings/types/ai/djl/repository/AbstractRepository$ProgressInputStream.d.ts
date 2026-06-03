import type { Artifact$Item } from '../../../ai/djl/repository/Artifact$Item.d.ts'
import type { Progress } from '../../../ai/djl/util/Progress.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { DigestInputStream } from '../../../java/security/DigestInputStream.d.ts'
export class AbstractRepository$ProgressInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: Progress)
    // private dis: DigestInputStream;
    // private progress: Progress;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private validateChecksum(arg0: Artifact$Item): void;
}