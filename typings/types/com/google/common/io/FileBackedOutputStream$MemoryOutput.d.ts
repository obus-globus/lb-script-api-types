import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class FileBackedOutputStream$MemoryOutput extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: any)
    getBuffer(): number[];
    getCount(): number;
}