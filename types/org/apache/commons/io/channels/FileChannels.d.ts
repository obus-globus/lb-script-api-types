import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
import type { ReadableByteChannel } from '../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FileChannels extends Object {
    static contentEquals(paramarg0: FileChannel, paramarg1: FileChannel, paramarg2: number): boolean;
    static contentEquals(paramarg0: ReadableByteChannel, paramarg1: ReadableByteChannel, paramarg2: number): boolean;
    static contentEquals(paramarg0: SeekableByteChannel, paramarg1: SeekableByteChannel, paramarg2: number): boolean;
    private constructor()
}