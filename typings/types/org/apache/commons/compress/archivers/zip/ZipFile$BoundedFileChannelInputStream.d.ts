import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../../../../java/nio/channels/FileChannel.d.ts'
import type { BoundedArchiveInputStream } from '../../../../../../org/apache/commons/compress/utils/BoundedArchiveInputStream.d.ts'
export class ZipFile$BoundedFileChannelInputStream extends BoundedArchiveInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number, arg1: number, arg2: FileChannel)
    // private archive: FileChannel;
    read(arg0: number, arg1: ByteBuffer): number;
}