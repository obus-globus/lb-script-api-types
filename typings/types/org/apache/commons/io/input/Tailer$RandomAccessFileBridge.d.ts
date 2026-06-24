import type { Tailer$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tailer$RandomAccessResourceBridge } from '../../../../../org/apache/commons/io/input/Tailer$RandomAccessResourceBridge.d.ts'
export class Tailer$RandomAccessFileBridge extends Object implements Tailer$RandomAccessResourceBridge {
    private constructor(arg0: File, arg1: string)
    constructor(arg0: File, arg1: string, arg2: Tailer$1)
    // private randomAccessFile: RandomAccessFile;
    close(): void;
    getPointer(): number;
    read(arg0: number[]): number;
    seek(arg0: number): void;
}