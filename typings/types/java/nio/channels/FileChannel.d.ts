import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { MemorySegment } from '../../../java/lang/foreign/MemorySegment.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { MappedByteBuffer } from '../../../java/nio/MappedByteBuffer.d.ts'
import type { FileChannel$MapMode } from '../../../java/nio/channels/FileChannel$MapMode.d.ts'
import type { FileLock } from '../../../java/nio/channels/FileLock.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { SeekableByteChannel } from '../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { AbstractInterruptibleChannel } from '../../../java/nio/channels/spi/AbstractInterruptibleChannel.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class FileChannel extends AbstractInterruptibleChannel implements GatheringByteChannel, ScatteringByteChannel, SeekableByteChannel {
    static open(paramarg0: Path[][], ...paramarg1: (Object | null)[]): FileChannel;
    static open(paramarg0: Path[][], paramarg1: OpenOption[], ...paramarg2: Object | null): FileChannel;
    constructor()
    force(arg0: boolean): void;
    lock(): FileLock;
    lock(arg0: number, arg1: number, arg2: boolean): FileLock;
    map(arg0: FileChannel$MapMode, arg1: number, arg2: number): MappedByteBuffer;
    map(arg0: FileChannel$MapMode, arg1: number, arg2: number, arg3: Arena): MemorySegment;
    position(): number;
    position(arg0: number): FileChannel;
    read(arg0: ByteBuffer): number;
    read(arg0: ByteBuffer, arg1: number): number;
    read(arg0: ByteBuffer[]): number;
    read(arg0: ByteBuffer[], arg1: number, arg2: number): number;
    size(): number;
    transferFrom(arg0: ReadableByteChannel, arg1: number, arg2: number): number;
    transferTo(arg0: number, arg1: number, arg2: WritableByteChannel): number;
    truncate(arg0: number): FileChannel;
    tryLock(): FileLock;
    tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer, arg1: number): number;
    write(arg0: ByteBuffer[]): number;
    write(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}