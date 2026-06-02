import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
export class FileOperator extends Object {
    constructor(fileChannel: FileChannel)
    // private fileChannel: FileChannel;
    read(pos: number, sink: Buffer, byteCount: number): void;
    write(pos: number, source: Buffer, byteCount: number): void;
}