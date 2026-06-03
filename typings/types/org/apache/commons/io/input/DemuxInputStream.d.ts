import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { InheritableThreadLocal } from '../../../../../java/lang/InheritableThreadLocal.d.ts'
export class DemuxInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor()
    // private inputStreamLocal: InheritableThreadLocal<InputStream>;
    bindStream(arg0: InputStream): InputStream;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}