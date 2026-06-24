import type { FileBackedOutputStream$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class FileBackedOutputStream$MemoryOutput extends ByteArrayOutputStream {
    static nullOutputStream(): OutputStream;
    private constructor()
    constructor(arg0: FileBackedOutputStream$1)
    getBuffer(): number[];
    getCount(): number;
}